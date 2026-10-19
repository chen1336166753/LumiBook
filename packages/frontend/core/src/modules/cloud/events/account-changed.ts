import { createEvent } from '@lumibook/infra';

import type { AuthAccountInfo } from '../entities/session';

export const AccountChanged = createEvent<AuthAccountInfo | null>(
  'AccountChanged'
);
