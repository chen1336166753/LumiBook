import type { DocMode } from '@blocksuite/affine/model';
import type { DocProps } from '@lumibook/core/blocksuite/initialization';

export interface DocCreateOptions {
  id?: string;
  title?: string;
  primaryMode?: DocMode;
  skipInit?: boolean;
  docProps?: DocProps;
  isTemplate?: boolean;
}
