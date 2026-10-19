import type { Store } from '@blocksuite/affine/store';
import { Scope } from '@lumibook/infra';

import type { DocRecord } from '../entities/record';

export class DocScope extends Scope<{
  docId: string;
  record: DocRecord;
  blockSuiteDoc: Store;
}> {}
