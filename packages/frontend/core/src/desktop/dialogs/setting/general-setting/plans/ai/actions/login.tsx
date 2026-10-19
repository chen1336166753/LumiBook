import { Button, type ButtonProps } from '@lumibook/component';
import { GlobalDialogService } from '@lumibook/core/modules/dialogs';
import { useI18n } from '@lumibook/i18n';
import { useService } from '@lumibook/infra';
import { useCallback } from 'react';

export const AILogin = (btnProps: ButtonProps) => {
  const t = useI18n();
  const globalDialogService = useService(GlobalDialogService);

  const onClickSignIn = useCallback(() => {
    globalDialogService.open('sign-in', {});
  }, [globalDialogService]);

  return (
    <Button onClick={onClickSignIn} variant="primary" {...btnProps}>
      {t['com.affine.payment.ai.action.login.button-label']()}
    </Button>
  );
};
