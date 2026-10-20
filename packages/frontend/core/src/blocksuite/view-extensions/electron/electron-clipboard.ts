import { NativeClipboardExtension } from '@blocksuite/affine/shared/services';
import { DesktopApiService } from '@lumibook/core/modules/desktop-api';
import type { FrameworkProvider } from '@lumibook/infra';

export function patchForClipboardInElectron(framework: FrameworkProvider) {
  const desktopApi = framework.get(DesktopApiService);
  return NativeClipboardExtension({
    copyAsPNG: desktopApi.handler.clipboard.copyAsPNG,
  });
}
