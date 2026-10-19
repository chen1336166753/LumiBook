import { createEvent } from '@lumibook/infra';

import type { AuthAccountInfo } from '../entities/session';

export const AccountLoggedIn = createEvent<AuthAccountInfo>('AccountLoggedIn');
