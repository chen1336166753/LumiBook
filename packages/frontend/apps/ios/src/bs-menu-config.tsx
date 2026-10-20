import { onMenuOpen } from '@blocksuite/affine/components/context-menu';
import { MobileBackCoordinator } from '@lumibook/core/mobile/modules/back-coordinator';
import { useService } from '@lumibook/infra';
import { type PropsWithChildren, useEffect } from 'react';

export const BlocksuiteMenuConfigProvider = ({
  children,
}: PropsWithChildren) => {
  const coordinator = useService(MobileBackCoordinator);

  useEffect(() => {
    return onMenuOpen(() => {
      return coordinator.registerVisual({
        interactive: false,
        handle: () => false,
      }).dispose;
    });
  }, [coordinator]);

  return children;
};
