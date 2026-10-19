import { OverlayModal } from '@lumibook/component';
import { useEnableCloud } from '@lumibook/core/components/hooks/affine/use-enable-cloud';
import { WorkspaceService } from '@lumibook/core/modules/workspace';
import { useI18n } from '@lumibook/i18n';
import { useService } from '@lumibook/infra';
import { useCallback } from 'react';

import TopSvg from './top-svg';

export const HistoryTipsModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const t = useI18n();
  const currentWorkspace = useService(WorkspaceService).workspace;
  const confirmEnableCloud = useEnableCloud();

  const handleConfirm = useCallback(() => {
    setOpen(false);
    confirmEnableCloud(currentWorkspace);
  }, [confirmEnableCloud, currentWorkspace, setOpen]);

  return (
    <OverlayModal
      open={open}
      topImage={<TopSvg />}
      title={t['com.affine.history-vision.tips-modal.title']()}
      onOpenChange={setOpen}
      description={t['com.affine.history-vision.tips-modal.description']()}
      cancelText={t['com.affine.history-vision.tips-modal.cancel']()}
      confirmButtonOptions={{
        variant: 'primary',
      }}
      onConfirm={handleConfirm}
      confirmText={t['com.affine.history-vision.tips-modal.confirm']()}
    />
  );
};
