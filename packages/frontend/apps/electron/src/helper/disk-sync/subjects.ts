import type { DiskSyncEvent } from '@lumibook/nbstore/disk';
import { Subject } from 'rxjs';

export interface DiskSyncSessionEvent {
  sessionId: string;
  event: DiskSyncEvent;
}

export const diskSyncSubjects = {
  event$: new Subject<DiskSyncSessionEvent>(),
};
