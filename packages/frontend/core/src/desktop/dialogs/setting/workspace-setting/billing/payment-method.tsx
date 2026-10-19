import { Button, notify } from '@lumibook/component';
import { SettingRow } from '@lumibook/component/setting-components';
import { useAsyncCallback } from '@lumibook/core/components/hooks/affine-async-hooks';
import { useMutation } from '@lumibook/core/components/hooks/use-mutation';
import { UrlService } from '@lumibook/core/modules/url';
import { UserFriendlyError } from '@lumibook/error';
import { createCustomerPortalMutation } from '@lumibook/graphql';
import { useI18n } from '@lumibook/i18n';
import { useService } from '@lumibook/infra';

import * as styles from './styles.css';

export const PaymentMethodUpdater = () => {
  const { isMutating, trigger } = useMutation({
    mutation: createCustomerPortalMutation,
  });
  const urlService = useService(UrlService);
  const t = useI18n();

  const update = useAsyncCallback(async () => {
    await trigger(null, {
      onSuccess: data => {
        urlService.openExternal(data.createCustomerPortal);
      },
    }).catch(e => {
      const userFriendlyError = UserFriendlyError.fromAny(e);
      notify.error(userFriendlyError);
    });
  }, [trigger, urlService]);

  return (
    <SettingRow
      className={styles.paymentMethod}
      name={t['com.affine.payment.billing-setting.payment-method']()}
      desc={t[
        'com.affine.payment.billing-setting.payment-method.description'
      ]()}
    >
      <Button onClick={update} loading={isMutating} disabled={isMutating}>
        {t['com.affine.payment.billing-setting.payment-method.go']()}
      </Button>
    </SettingRow>
  );
};
