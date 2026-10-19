import { CollectionService } from '@lumibook/core/modules/collection';
import { DocsService } from '@lumibook/core/modules/doc';
import { DocsSearchService } from '@lumibook/core/modules/docs-search';
import { FavoriteService } from '@lumibook/core/modules/favorite';
import { GlobalContextService } from '@lumibook/core/modules/global-context';
import { OrganizeService } from '@lumibook/core/modules/organize';
import { GuardService } from '@lumibook/core/modules/permissions';
import { TagService } from '@lumibook/core/modules/tag';
import {
  WorkspaceScope,
  WorkspaceService,
} from '@lumibook/core/modules/workspace';
import type { Framework } from '@lumibook/infra';

import { MobileShellDataProjection } from './shell-data-projection';

export * from './navigation-projection';
export * from './shell-data-projection';

export function configureMobileNavigationProjection(framework: Framework) {
  framework
    .scope(WorkspaceScope)
    .service(MobileShellDataProjection, [
      DocsService,
      DocsSearchService,
      FavoriteService,
      GlobalContextService,
      GuardService,
      WorkspaceService,
      CollectionService,
      OrganizeService,
      TagService,
    ]);
}
