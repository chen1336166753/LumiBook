import { Service } from '@lumibook/infra';

import { WorkspaceList } from '../entities/list';

export class WorkspaceListService extends Service {
  list = this.framework.createEntity(WorkspaceList);
}
