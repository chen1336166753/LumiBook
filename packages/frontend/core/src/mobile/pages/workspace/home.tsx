import { useThemeColorV2 } from '@lumibook/component';

import { MobileNavigationVirtualScroller } from '../../components/navigation';

export const Component = () => {
  useThemeColorV2('layer/background/mobile/primary');

  return <MobileNavigationVirtualScroller />;
};
