import { notify, Switch } from '@lumibook/component';
import { SettingRow } from '@lumibook/component/setting-components';
import { Button } from '@lumibook/component/ui/button';
import { useAsyncCallback } from '@lumibook/core/components/hooks/affine-async-hooks';
import { DesktopApiService } from '@lumibook/core/modules/desktop-api';
import { FeatureFlagService } from '@lumibook/core/modules/feature-flag';
import {
  DISK_SYNC_FOLDERS_GLOBAL_STATE_KEY,
  getDiskSyncFolderPath,
  setDiskSyncFolderPath,
} from '@lumibook/core/modules/workspace-engine/impls/disk-config';
import { useLiveData, useService } from '@lumibook/infra';
import { useCallback, useEffect, useState } from 'react';

export const DiskSyncPanel = ({ workspaceId }: { workspaceId: string }) => {
  const desktopApi = useService(DesktopApiService);
  const featureFlagService = useService(FeatureFlagService);
  const enabled = useLiveData(featureFlagService.flags.enable_disk_sync.$);
  const [folder, setFolder] = useState<string | null>(() =>
    getDiskSyncFolderPath(workspaceId)
  );

  useEffect(() => {
    setFolder(getDiskSyncFolderPath(workspaceId));
    const unwatch = desktopApi.sharedStorage.globalState.watch<
      Record<string, string>
    >(DISK_SYNC_FOLDERS_GLOBAL_STATE_KEY, folders => {
      const next = folders?.[workspaceId];
      setFolder(typeof next === 'string' && next.length > 0 ? next : null);
    });
    return () => {
      unwatch();
    };
  }, [desktopApi.sharedStorage.globalState, workspaceId]);

  const onToggle = useCallback(
    (checked: boolean) => {
      featureFlagService.flags.enable_disk_sync.set(checked);
    },
    [featureFlagService]
  );

  const onChooseFolder = useAsyncCallback(async () => {
    const result = await desktopApi.handler.dialog.selectMarkdownSyncFolder();
    if (result?.canceled || !result?.filePath) {
      return;
    }
    if (result.filePath === folder) {
      return;
    }
    setDiskSyncFolderPath(workspaceId, result.filePath);
    setFolder(result.filePath);
    if (enabled) {
      window.location.reload();
      return;
    }
    notify.success({
      title: '磁盘同步文件夹已更新',
    });
  }, [desktopApi.handler.dialog, enabled, folder, workspaceId]);

  const onClearFolder = useCallback(() => {
    if (!folder) {
      return;
    }
    setDiskSyncFolderPath(workspaceId, null);
    setFolder(null);
    if (enabled) {
      window.location.reload();
    }
  }, [enabled, folder, workspaceId]);

  return (
    <>
      <SettingRow
        name={'Markdown 文件夹同步（实验性）'}
        desc={'将页面与本地文件夹中的 Markdown 文件同步。'}
      >
        <Switch
          aria-label="磁盘 Markdown 同步"
          data-testid="disk-sync-toggle"
          checked={!!enabled}
          onChange={onToggle}
        />
      </SettingRow>
      <SettingRow
        name={'同步文件夹'}
        desc={folder ?? '尚未选择文件夹'}
        spreadCol={false}
      >
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <Button
            data-testid="disk-sync-choose-folder"
            disabled={!enabled}
            onClick={onChooseFolder}
          >
            选择文件夹
          </Button>
          {folder ? (
            <Button
              data-testid="disk-sync-clear-folder"
              disabled={!enabled}
              onClick={onClearFolder}
            >
              清空
            </Button>
          ) : null}
        </div>
      </SettingRow>
      {enabled && folder ? (
        <SettingRow
          name={'查看 Markdown 变更'}
          desc={`对已有文件的变更会保存在 ${folder}/.affine-sync/candidates。请检查候选文件，然后用同名 Markdown 文件覆盖以接受变更。`}
          spreadCol={false}
        />
      ) : null}
    </>
  );
};
