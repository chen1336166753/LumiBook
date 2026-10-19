import { useI18n } from '@lumibook/i18n';

import { SettingGroup } from '../group';
import { RowLayout } from '../row.layout';

export const OthersGroup = () => {
  const t = useI18n();

  return (
    <SettingGroup title={t['com.affine.mobile.setting.others.title']()}>
      <RowLayout
        label={t['com.affine.mobile.setting.others.website']()}
        href="https://github.com/chen1336166753/LumiBook"
      />

      <RowLayout
        label={t['com.affine.mobile.setting.others.privacy']()}
        href="https://github.com/chen1336166753/LumiBook/blob/main/LICENSE"
      />

      <RowLayout
        label={t['com.affine.mobile.setting.others.terms']()}
        href="https://github.com/chen1336166753/LumiBook/blob/main/LICENSE"
      />
    </SettingGroup>
  );
};
