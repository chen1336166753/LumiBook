import type { WorkerInitOptions } from '@lumibook/nbstore/worker/client';
import { Scope } from '@lumibook/infra';

import type { WorkspaceOpenOptions } from '../open-options';

export class WorkspaceScope extends Scope<{
  openOptions: WorkspaceOpenOptions;
  engineWorkerInitOptions: WorkerInitOptions;
}> {}
