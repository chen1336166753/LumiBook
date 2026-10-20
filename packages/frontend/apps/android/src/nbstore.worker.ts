import './setup-worker';

import { type MessageCommunicapable, OpConsumer } from '@lumibook/infra/op';
import { MessagePortAuthProvider } from '@lumibook/mobile-shared/auth/channel';
import { installAuthRequestProxy } from '@lumibook/mobile-shared/auth/request';
import { broadcastChannelStorages } from '@lumibook/nbstore/broadcast-channel';
import {
  cloudStorages,
  configureSocketAuthMethod,
} from '@lumibook/nbstore/cloud';
import { idbStoragesIndexerOnly } from '@lumibook/nbstore/idb';
import {
  bindNativeDBApis,
  type NativeDBApis,
  sqliteStorages,
} from '@lumibook/nbstore/sqlite';
import {
  StoreManagerConsumer,
  type WorkerManagerOps,
} from '@lumibook/nbstore/worker/consumer';
import { AsyncCall } from 'async-call-rpc';

const authProvider = new MessagePortAuthProvider();
installAuthRequestProxy(authProvider);

configureSocketAuthMethod((endpoint, cb) => {
  authProvider
    .getValidAccessToken(endpoint)
    .then(token => cb(token ? { token, tokenType: 'jwt' } : {}))
    .catch(() => cb({ error: 'AUTH_SESSION_TEMPORARILY_UNAVAILABLE' }));
});

globalThis.addEventListener('message', e => {
  if (e.data.type === 'auth-access-token-channel') {
    authProvider.setPort(e.ports[0] as MessagePort);
    return;
  }

  if (e.data.type === 'native-db-api-channel') {
    const port = e.ports[0] as MessagePort;
    const rpc = AsyncCall<NativeDBApis>(
      {},
      {
        channel: {
          on(listener) {
            const f = (e: MessageEvent<any>) => {
              listener(e.data);
            };
            port.addEventListener('message', f);
            return () => {
              port.removeEventListener('message', f);
            };
          },
          send(data) {
            port.postMessage(data);
          },
        },
      }
    );
    bindNativeDBApis(rpc);
    port.start();
  }
});

const consumer = new OpConsumer<WorkerManagerOps>(
  globalThis as MessageCommunicapable
);

const storeManager = new StoreManagerConsumer([
  ...idbStoragesIndexerOnly,
  ...sqliteStorages,
  ...broadcastChannelStorages,
  ...cloudStorages,
]);

storeManager.bindConsumer(consumer);
