import type { Store } from '@blocksuite/affine/store';
import { createBlockStdScope } from '@lumibook/core/blocksuite/manager/view';
import { useMemo } from 'react';

export function useBlockStdScope(doc: Store) {
  return useMemo(() => createBlockStdScope(doc), [doc]);
}
