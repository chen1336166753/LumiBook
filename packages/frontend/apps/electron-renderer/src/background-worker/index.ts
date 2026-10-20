import '@lumibook/core/bootstrap/electron';

import { apis, events } from '@lumibook/electron-api';
import { OpConsumer } from '@lumibook/infra/op';
import { broadcastChannelStorages } from '@lumibook/nbstore/broadcast-channel';
import {
  cloudStorages,
  configureSocketAuthMethod,
} from '@lumibook/nbstore/cloud';
import { bindDiskSyncApis, diskStorages } from '@lumibook/nbstore/disk';
import { bindNativeDBApis, sqliteStorages } from '@lumibook/nbstore/sqlite';
import {
  bindNativeDBV1Apis,
  sqliteV1Storages,
} from '@lumibook/nbstore/sqlite/v1';
import {
  StoreManagerConsumer,
  type WorkerManagerOps,
} from '@lumibook/nbstore/worker/consumer';

import { createDiskSyncApis } from './disk-sync-bridge';

// oxlint-disable-next-line no-non-null-assertion
bindNativeDBApis(apis!.nbstore);
// oxlint-disable-next-line no-non-null-assertion
bindNativeDBV1Apis(apis!.db);
// oxlint-disable-next-line no-non-null-assertion
bindDiskSyncApis(createDiskSyncApis(apis!.diskSync, events!.diskSync));
configureSocketAuthMethod((endpoint, cb) => {
  // oxlint-disable-next-line no-non-null-assertion
  apis!.auth
    .getValidAccessToken(endpoint)
    .then(({ token }: { token?: string | null }) => {
      cb(token ? { token, tokenType: 'jwt' } : {});
    })
    .catch(() => cb({ error: 'AUTH_SESSION_TEMPORARILY_UNAVAILABLE' }));
});

const storeManager = new StoreManagerConsumer([
  ...sqliteStorages,
  ...sqliteV1Storages,
  ...diskStorages,
  ...broadcastChannelStorages,
  ...cloudStorages,
]);

window.addEventListener('message', ev => {
  if (ev.data.type === 'electron:worker-connect') {
    const port = ev.ports[0];

    const consumer = new OpConsumer<WorkerManagerOps>(port);
    storeManager.bindConsumer(consumer);
  }
});
