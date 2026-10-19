import { Service } from '@lumibook/infra';

import { FolderTree } from '../entities/folder-tree';
export class OrganizeService extends Service {
  folderTree = this.framework.createEntity(FolderTree);
}
