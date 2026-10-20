import { AffineContext } from '@lumibook/core/components/context';
import { AppFallback } from '@lumibook/core/mobile/components/app-fallback';
import { configureMobileModules } from '@lumibook/core/mobile/modules';
import { HapticProvider } from '@lumibook/core/mobile/modules/haptics';
import { VirtualKeyboardProvider } from '@lumibook/core/mobile/modules/virtual-keyboard';
import { router } from '@lumibook/core/mobile/router';
import { configureCommonModules } from '@lumibook/core/modules';
import { I18nProvider } from '@lumibook/core/modules/i18n';
import { LifecycleService } from '@lumibook/core/modules/lifecycle';
import {
  configureLocalStorageStateStorageImpls,
  NbstoreProvider,
} from '@lumibook/core/modules/storage';
import { PopupWindowProvider } from '@lumibook/core/modules/url';
import { configureBrowserWorkbenchModule } from '@lumibook/core/modules/workbench';
import { configureBrowserWorkspaceFlavours } from '@lumibook/core/modules/workspace-engine';
import { getWorkerUrl } from '@lumibook/env/worker';
import { Framework, FrameworkRoot, getCurrentStore } from '@lumibook/infra';
import { OpClient } from '@lumibook/infra/op';
import { StoreManagerClient } from '@lumibook/nbstore/worker/client';
import { setTelemetryTransport } from '@lumibook/track';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

let storeManagerClient: StoreManagerClient;

const workerUrl = getWorkerUrl('nbstore');
if (window.SharedWorker) {
  const worker = new SharedWorker(workerUrl, { name: 'affine-shared-worker' });
  storeManagerClient = new StoreManagerClient(new OpClient(worker.port));
} else {
  const worker = new Worker(workerUrl);
  storeManagerClient = new StoreManagerClient(new OpClient(worker));
}
setTelemetryTransport(storeManagerClient.telemetry);
window.addEventListener('beforeunload', () => {
  storeManagerClient.dispose();
});

const framework = new Framework();
configureCommonModules(framework);
configureBrowserWorkbenchModule(framework);
configureLocalStorageStateStorageImpls(framework);
configureBrowserWorkspaceFlavours(framework);
configureMobileModules(framework);
framework.impl(NbstoreProvider, {
  realtime: storeManagerClient.realtime,
  openStore(key, options) {
    const { store, dispose } = storeManagerClient.open(key, options);
    return {
      store: store,
      dispose: () => {
        dispose();
      },
    };
  },
});
framework.impl(PopupWindowProvider, {
  open: (target: string) => {
    const targetUrl = new URL(target);

    let url: string;
    // safe to open directly if in the same origin
    if (targetUrl.origin === location.origin) {
      url = target;
    } else {
      const redirectProxy = location.origin + '/redirect-proxy';
      const search = new URLSearchParams({
        redirect_uri: target,
      });

      url = `${redirectProxy}?${search.toString()}`;
    }
    window.open(url, '_blank', 'popup noreferrer noopener');
  },
});
framework.impl(HapticProvider, {
  impact: options => {
    return new Promise(resolve => {
      const style = options?.style ?? 'LIGHT';
      const pattern = {
        LIGHT: [10],
        MEDIUM: [20],
        HEAVY: [30],
      }[style];
      const result = navigator.vibrate?.(pattern);
      if (!result) {
        console.warn('vibrate not supported, or user not interacted');
      }
      resolve();
    });
  },
  notification: () => Promise.reject('Not supported'),
  vibrate: () => Promise.reject('Not supported'),
  selectionStart: () => Promise.reject('Not supported'),
  selectionChanged: () => Promise.reject('Not supported'),
  selectionEnd: () => Promise.reject('Not supported'),
});
framework.impl(VirtualKeyboardProvider, {
  onChange: callback => {
    if (!visualViewport) {
      console.warn('visualViewport is not supported');
      return () => {};
    }

    const listener = () => {
      if (!visualViewport) return;
      const windowHeight = window.innerHeight;

      /**
       * ┌───────────────┐ - window top
       * │               │
       * │               │
       * │               │
       * │               │
       * │               │
       * └───────────────┘ - keyboard top        --
       * │               │                       │ keyboard height in layout viewport
       * └───────────────┘ - page(html) bottom   --
       * │               │                       │ visualViewport.offsetTop
       * └───────────────┘ - window bottom       --
       */
      callback({
        visible: window.innerHeight - visualViewport.height > 0,
        height: windowHeight - visualViewport.height - visualViewport.offsetTop,
      });
    };

    visualViewport.addEventListener('resize', listener);
    visualViewport.addEventListener('scroll', listener);
    return () => {
      visualViewport?.removeEventListener('resize', listener);
      visualViewport?.removeEventListener('scroll', listener);
    };
  },
});
const frameworkProvider = framework.provider();

// setup application lifecycle events, and emit application start event
window.addEventListener('focus', () => {
  frameworkProvider.get(LifecycleService).applicationFocus();
});
frameworkProvider.get(LifecycleService).applicationStart();

export function App() {
  return (
    <Suspense fallback={<AppFallback />}>
      <FrameworkRoot framework={frameworkProvider}>
        <I18nProvider>
          <AffineContext store={getCurrentStore()}>
            <RouterProvider router={router} />
          </AffineContext>
        </I18nProvider>
      </FrameworkRoot>
    </Suspense>
  );
}
