import { Service } from '@lumibook/infra';

import { NativePaywallProvider } from '../providers/native-paywall';

export class NativePaywallService extends Service {
  constructor() {
    super();
  }

  getNativePaywallProvider() {
    return this.framework.getOptional(NativePaywallProvider);
  }
}
