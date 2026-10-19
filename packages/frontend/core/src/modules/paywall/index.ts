import type { Framework } from '@lumibook/infra';

import { NativePaywallService } from './services/native-paywall';

export { NativePaywallProvider } from './providers/native-paywall';
export { NativePaywallService } from './services/native-paywall';

export function configurePaywallModule(framework: Framework) {
  framework.service(NativePaywallService);
}
