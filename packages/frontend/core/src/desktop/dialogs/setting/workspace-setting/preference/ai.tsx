import { Switch } from '@lumibook/component';
import {
  SettingRow,
  SettingWrapper,
} from '@lumibook/component/setting-components';
import { useAsyncCallback } from '@lumibook/core/components/hooks/affine-async-hooks';
import { ServerService } from '@lumibook/core/modules/cloud';
import { WorkspacePermissionService } from '@lumibook/core/modules/permissions';
import { WorkspaceShareSettingService } from '@lumibook/core/modules/share-setting';
import { useI18n } from '@lumibook/i18n';
import { useLiveData, useService } from '@lumibook/infra';

export const AiSetting = () => {
  const t = useI18n();
  const shareSetting = useService(WorkspaceShareSettingService).sharePreview;
  const serverService = useService(ServerService);
  const serverEnableAi = useLiveData(
    serverService.server.features$.map(f => f?.copilot)
  );
  const workspaceEnableAi = useLiveData(shareSetting.enableAi$);
  const loading = useLiveData(shareSetting.isLoading$);
  const permissionService = useService(WorkspacePermissionService);
  const isOwner = useLiveData(permissionService.permission.isOwner$);

  const toggleAi = useAsyncCallback(
    async (checked: boolean) => {
      await shareSetting.setEnableAi(checked);
    },
    [shareSetting]
  );

  if (!isOwner || !serverEnableAi) {
    return null;
  }

  return (
    <SettingWrapper
      title={t['com.affine.settings.workspace.affine-ai.title']()}
    >
      <SettingRow
        name={t['com.affine.settings.workspace.affine-ai.label']()}
        desc={t['com.affine.settings.workspace.affine-ai.description']()}
      >
        <Switch
          checked={!!workspaceEnableAi}
          onChange={toggleAi}
          disabled={loading}
        />
      </SettingRow>
    </SettingWrapper>
  );
};
