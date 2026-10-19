import '@lumibook/core/bootstrap/browser';

import { broadcastChannelStorages } from '@lumibook/nbstore/broadcast-channel';
import { cloudStorages } from '@lumibook/nbstore/cloud';
import { idbStorages } from '@lumibook/nbstore/idb';
import { idbV1Storages } from '@lumibook/nbstore/idb/v1';
import {
  StoreManagerConsumer,
  type WorkerManagerOps,
} from '@lumibook/nbstore/worker/consumer';
import { type MessageCommunicapable, OpConsumer } from '@lumibook/infra/op';

const consumer = new StoreManagerConsumer([
  ...idbStorages,
  ...idbV1Storages,
  ...broadcastChannelStorages,
  ...cloudStorages,
]);

if ('onconnect' in globalThis) {
  // if in shared worker

  (globalThis as any).onconnect = (event: MessageEvent) => {
    const port = event.ports[0];
    consumer.bindConsumer(new OpConsumer<WorkerManagerOps>(port));
  };
} else {
  // if in worker
  consumer.bindConsumer(
    new OpConsumer<WorkerManagerOps>(globalThis as MessageCommunicapable)
  );
}
