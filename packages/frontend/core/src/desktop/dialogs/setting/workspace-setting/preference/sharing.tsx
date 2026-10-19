import { Switch } from '@lumibook/component';
import {
  SettingRow,
  SettingWrapper,
} from '@lumibook/component/setting-components';
import { useAsyncCallback } from '@lumibook/core/components/hooks/affine-async-hooks';
import { WorkspacePermissionService } from '@lumibook/core/modules/permissions';
import { WorkspaceShareSettingService } from '@lumibook/core/modules/share-setting';
import { WorkspaceService } from '@lumibook/core/modules/workspace';
import { useI18n } from '@lumibook/i18n';
import { useLiveData, useService } from '@lumibook/infra';

export const SharingPanel = () => {
  const workspace = useService(WorkspaceService).workspace;
  if (workspace.flavour === 'local') {
    return null;
  }
  return <Sharing />;
};

export const Sharing = () => {
  const t = useI18n();
  const shareSetting = useService(WorkspaceShareSettingService).sharePreview;
  const enableSharing = useLiveData(shareSetting.enableSharing$);
  const enableUrlPreview = useLiveData(shareSetting.enableUrlPreview$);
  const loading = useLiveData(shareSetting.isLoading$);
  const permissionService = useService(WorkspacePermissionService);
  const isOwner = useLiveData(permissionService.permission.isOwner$);

  const handleToggleSharing = useAsyncCallback(
    async (checked: boolean) => {
      await shareSetting.setEnableSharing(checked);
    },
    [shareSetting]
  );

  const handleCheck = useAsyncCallback(
    async (checked: boolean) => {
      await shareSetting.setEnableUrlPreview(checked);
    },
    [shareSetting]
  );

  if (!isOwner) {
    return null;
  }

  return (
    <SettingWrapper title={t['com.affine.settings.workspace.sharing.title']()}>
      <SettingRow
        name={t['com.affine.settings.workspace.sharing.url-preview.title']()}
        desc={t[
          'com.affine.settings.workspace.sharing.url-preview.description'
        ]()}
      >
        <Switch
          checked={enableUrlPreview || false}
          onChange={handleCheck}
          disabled={loading}
        />
      </SettingRow>
      <SettingRow
        name={t[
          'com.affine.settings.workspace.sharing.workspace-sharing.title'
        ]()}
        desc={t[
          'com.affine.settings.workspace.sharing.workspace-sharing.description'
        ]()}
      >
        <Switch
          checked={enableSharing ?? true}
          onChange={handleToggleSharing}
          disabled={loading}
        />
      </SettingRow>
    </SettingWrapper>
  );
};
