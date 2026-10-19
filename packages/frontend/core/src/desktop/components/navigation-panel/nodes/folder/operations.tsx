import { MenuItem } from '@lumibook/component';
import { IsFavoriteIcon } from '@lumibook/core/components/pure/icons';
import { CompatibleFavoriteItemsAdapter } from '@lumibook/core/modules/favorite';
import { useI18n } from '@lumibook/i18n';
import { useLiveData, useService } from '@lumibook/infra';
import { useMemo } from 'react';

export const FavoriteFolderOperation = ({ id }: { id: string }) => {
  const t = useI18n();
  const compatibleFavoriteItemsAdapter = useService(
    CompatibleFavoriteItemsAdapter
  );

  const favorite = useLiveData(
    useMemo(() => {
      return compatibleFavoriteItemsAdapter.isFavorite$(id, 'folder');
    }, [compatibleFavoriteItemsAdapter, id])
  );

  return (
    <MenuItem
      prefixIcon={<IsFavoriteIcon favorite={favorite} />}
      onClick={() => compatibleFavoriteItemsAdapter.toggle(id, 'folder')}
    >
      {favorite
        ? t['com.affine.rootAppSidebar.organize.folder-rm-favorite']()
        : t['com.affine.rootAppSidebar.organize.folder-add-favorite']()}
    </MenuItem>
  );
};
