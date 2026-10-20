import { app, Menu, shell } from 'electron';

import { isMacOS } from '../../shared/utils';
import { logger, revealLogFile } from '../logger';
import { uiSubjects } from '../ui/subject';
import { checkForUpdates } from '../updater';
import {
  addTab,
  initAndShowMainWindow,
  reloadView,
  showMainWindow,
  switchTab,
  switchToNextTab,
  switchToPreviousTab,
  undoCloseTab,
  WebContentViewsManager,
} from '../windows-manager';
import { popupManager } from '../windows-manager/popup';
import { WorkerManager } from '../worker/pool';
import { applicationMenuSubjects } from './subject';

// Unique id for menuitems
const MENUITEM_NEW_PAGE = 'affine:new-page';

export function createApplicationMenu() {
  const isMac = isMacOS();

  // Electron menu cannot be modified
  // You have to copy the complete default menu template event if you want to add a single custom item
  // See https://www.electronjs.org/docs/latest/api/menu#examples
  const template = [
    // { role: 'appMenu' }
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              {
                label: `关于 ${app.getName()}`,
                click: async () => {
                  await showMainWindow();
                  applicationMenuSubjects.openInSettingModal$.next({
                    activeTab: 'about',
                  });
                },
              },
              { type: 'separator' },
              { role: 'services' },
              { type: 'separator' },
              { role: 'hide' },
              { role: 'hideOthers' },
              { role: 'unhide' },
              { type: 'separator' },
              { role: 'quit' },
            ],
          },
        ]
      : []),
    // { role: 'fileMenu' }
    {
      label: '文件',
      submenu: [
        {
          id: MENUITEM_NEW_PAGE,
          label: '新建文档',
          accelerator: isMac ? 'Cmd+N' : 'Ctrl+N',
          click: async () => {
            await initAndShowMainWindow();
            // fixme: if the window is just created, the new page action will not be triggered
            applicationMenuSubjects.newPageAction$.next('default');
          },
        },
      ],
    },
    // { role: 'editMenu' }
    {
      label: '编辑',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        ...(isMac
          ? [
              { role: 'pasteAndMatchStyle' },
              { role: 'delete' },
              { role: 'selectAll' },
              { type: 'separator' },
              {
                label: '语音',
                submenu: [{ role: 'startSpeaking' }, { role: 'stopSpeaking' }],
              },
            ]
          : [{ role: 'delete' }, { type: 'separator' }, { role: 'selectAll' }]),
      ],
    },
    // { role: 'viewMenu' }
    {
      label: '视图',
      submenu: [
        {
          label: '重新加载',
          accelerator: 'CommandOrControl+R',
          click() {
            reloadView().catch(console.error);
          },
        },
        {
          role: 'windowMenu',
        },
        {
          label: '打开开发者工具',
          accelerator: isMac ? 'Cmd+Option+I' : 'Ctrl+Shift+I',
          click: () => {
            const workerContents = Array.from(
              WorkerManager.instance.workers.values()
            ).map(
              worker => [worker.key, worker.browserWindow.webContents] as const
            );

            const tabs = Array.from(
              WebContentViewsManager.instance.tabViewsMap
            ).map(view => {
              const isActive = WebContentViewsManager.instance.isActiveTab(
                view[0]
              );
              return [
                view[0] + (isActive ? ' (active)' : ''),
                view[1].webContents,
              ] as const;
            });

            const popups = Array.from(popupManager.popupWindows$.value.values())
              .filter(popup => popup.browserWindow)
              .map(popup => {
                // oxlint-disable-next-line no-non-null-assertion
                return [popup.type, popup.browserWindow!.webContents] as const;
              });

            const allWebContents = [
              ['tabs', tabs],
              ['workers', workerContents],
              ['popups', popups],
            ] as const;

            Menu.buildFromTemplate(
              allWebContents.flatMap(([type, contents]) => {
                return [
                  {
                    label: type,
                    enabled: false,
                  },
                  ...contents.map(([id, webContents]) => ({
                    label: id,
                    click: () => {
                      webContents.openDevTools({
                        mode: 'undocked',
                      });
                    },
                  })),
                  { type: 'separator' },
                ];
              })
            ).popup();
          },
        },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        ...(!isMacOS()
          ? [{ role: 'zoomIn', accelerator: 'Ctrl+=', visible: false }]
          : []),
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
        { type: 'separator' },
        {
          label: '新建标签页',
          accelerator: 'CommandOrControl+T',
          click() {
            logger.info('New tab with shortcut');
            addTab().catch(console.error);
          },
        },
        {
          label: '关闭视图',
          accelerator: 'CommandOrControl+W',
          click() {
            logger.info('Close view with shortcut');
            // tell the active workbench to close the current view
            uiSubjects.onCloseView$.next();
          },
        },
        {
          label: '恢复关闭的标签页',
          accelerator: 'CommandOrControl+Shift+T',
          click() {
            logger.info('Undo close tab with shortcut');
            undoCloseTab().catch(console.error);
          },
        },
        ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => {
          const shortcut = `CommandOrControl+${n}`;
          const listener = () => {
            switchTab(n);
          };
          return {
            acceleratorWorksWhenHidden: true,
            label: `切换到标签页 ${n}`,
            accelerator: shortcut,
            click: listener,
            visible: false,
          };
        }),
        {
          label: '切换到下一个标签页',
          accelerator: 'Control+Tab',
          click: () => {
            switchToNextTab();
          },
        },
        {
          label: '切换到上一个标签页',
          accelerator: 'Control+Shift+Tab',
          click: () => {
            switchToPreviousTab();
          },
        },
        {
          label: '切换到下一个标签页（mac 2）',
          accelerator: 'Alt+Command+]',
          visible: false,
          click: () => {
            switchToNextTab();
          },
        },
        {
          label: '切换到上一个标签页（mac 2）',
          accelerator: 'Alt+Command+[',
          visible: false,
          click: () => {
            switchToPreviousTab();
          },
        },
      ],
    },
    {
      role: 'help',
      submenu: [
        {
          label: '关于识光',
          click: async () => {
            await shell.openExternal(
              'https://github.com/chen1336166753/LumiBook'
            );
          },
        },
        {
          label: '打开日志文件',
          click: async () => {
            await revealLogFile();
          },
        },
        {
          label: '检查更新',
          click: async () => {
            await initAndShowMainWindow();
            await checkForUpdates();
          },
        },
      ],
    },
  ];

  // @ts-expect-error: The snippet is copied from Electron official docs.
  //                   It's working as expected. No idea why it contains type errors.
  //                   Just ignore for now.
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  return menu;
}
