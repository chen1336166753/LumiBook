/* oxlint-disable typescript/no-non-null-assertion */
import { apis, appInfo, events, sharedStorage } from '@lumibook/electron-api';
import { Service } from '@lumibook/infra';

import type { DesktopApiProvider } from '../provider';

export class ElectronApiImpl extends Service implements DesktopApiProvider {
  constructor() {
    super();

    if (!apis || !events || !sharedStorage || !appInfo) {
      throw new Error('Failed to initialize DesktopApiImpl');
    }
  }
  handler = apis;
  events = events;
  sharedStorage = sharedStorage;
  appInfo = appInfo!;
}
