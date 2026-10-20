import { ShareIcon } from '@blocksuite/icons/rc';
import type { MenuItemProps } from '@lumibook/component';
import { MenuItem } from '@lumibook/component';
import { useI18n } from '@lumibook/i18n';

export const DisablePublicSharing = (props: MenuItemProps) => {
  const t = useI18n();
  return (
    <MenuItem type="danger" prefixIcon={<ShareIcon />} {...props}>
      {t['Disable Public Sharing']()}
    </MenuItem>
  );
};
