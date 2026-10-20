import type { Container } from '@blocksuite/affine/global/di';
import {
  FileSizeLimitProvider,
  type IFileSizeLimitService,
} from '@blocksuite/affine/shared/services';
import { Extension } from '@blocksuite/affine/store';
import { WorkspaceDialogService } from '@lumibook/core/modules/dialogs';
import type { FrameworkProvider } from '@lumibook/infra';
import track from '@lumibook/track';

export function patchFileSizeLimitExtension(framework: FrameworkProvider) {
  const workspaceDialogService = framework.get(WorkspaceDialogService);

  class AffineFileSizeLimitService
    extends Extension
    implements IFileSizeLimitService
  {
    // 2GB
    maxFileSize = 2 * 1024 * 1024 * 1024;

    onOverFileSize() {
      workspaceDialogService.open('setting', {
        activeTab: 'plans',
        scrollAnchor: 'cloudPricingPlan',
      });
      track.$.paywall.storage.viewPlans();
    }

    static override setup(di: Container) {
      di.override(FileSizeLimitProvider, AffineFileSizeLimitService);
    }
  }

  return AffineFileSizeLimitService;
}
