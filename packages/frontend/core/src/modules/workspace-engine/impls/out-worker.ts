import { getWorkerUrl } from '@lumibook/env/worker';
import { OpClient } from '@lumibook/infra/op';

import type { WorkerOps } from './worker-ops';

let worker: OpClient<WorkerOps> | undefined;

export function getWorkspaceProfileWorker() {
  if (worker) {
    return worker;
  }

  const rawWorker = new Worker(getWorkerUrl('workspace-profile'));

  worker = new OpClient<WorkerOps>(rawWorker);
  return worker;
}
