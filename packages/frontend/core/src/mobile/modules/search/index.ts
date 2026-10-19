import { WorkspaceScope } from '@lumibook/core/modules/workspace';
import { type Framework } from '@lumibook/infra';

import { MobileSearchService } from './service/search';

export { MobileSearchService };

export function configureMobileSearchModule(framework: Framework) {
  framework.scope(WorkspaceScope).service(MobileSearchService);
}
