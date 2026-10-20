import { SingleSelectCheckSolidIcon } from '@blocksuite/icons/rc';
import {
  Button,
  type ButtonProps,
  notify,
  useConfirmModal,
} from '@lumibook/component';
import { useAsyncCallback } from '@lumibook/core/components/hooks/affine-async-hooks';
import { SubscriptionService } from '@lumibook/core/modules/cloud';
import { SubscriptionPlan } from '@lumibook/graphql';
import { useI18n } from '@lumibook/i18n';
import { useService } from '@lumibook/infra';
import { track } from '@lumibook/track';
import { cssVar } from '@toeverything/theme';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const AIResume = (btnProps: ButtonProps) => {
  const t = useI18n();
  const [idempotencyKey, setIdempotencyKey] = useState(nanoid());
  const subscription = useService(SubscriptionService).subscription;

  const [isMutating, setIsMutating] = useState(false);

  const { openConfirmModal } = useConfirmModal();

  const resume = useAsyncCallback(async () => {
    const aiSubscription = subscription.ai$.value;
    if (aiSubscription) {
      track.$.settingsPanel.plans.resumeSubscription({
        plan: SubscriptionPlan.AI,
        recurring: aiSubscription.recurring,
      });
    }

    openConfirmModal({
      title: t['com.affine.payment.ai.action.resume.confirm.title'](),
      description:
        t['com.affine.payment.ai.action.resume.confirm.description'](),
      confirmText:
        t['com.affine.payment.ai.action.resume.confirm.confirm-text'](),
      confirmButtonOptions: {
        variant: 'primary',
      },
      cancelText:
        t['com.affine.payment.ai.action.resume.confirm.cancel-text'](),
      onConfirm: async () => {
        setIsMutating(true);
        await subscription.resumeSubscription(
          idempotencyKey,
          SubscriptionPlan.AI
        );
        if (aiSubscription) {
          track.$.settingsPanel.plans.confirmResumingSubscription({
            plan: aiSubscription.plan,
            recurring: aiSubscription.recurring,
          });
        }
        notify({
          icon: <SingleSelectCheckSolidIcon />,
          iconColor: cssVar('processingColor'),
          title:
            t['com.affine.payment.ai.action.resume.confirm.notify.title'](),
          message:
            t['com.affine.payment.ai.action.resume.confirm.notify.msg'](),
        });
        setIdempotencyKey(nanoid());
      },
    });
  }, [subscription, openConfirmModal, t, idempotencyKey]);

  return (
    <Button
      loading={isMutating}
      onClick={resume}
      variant="primary"
      {...btnProps}
    >
      {t['com.affine.payment.ai.action.resume.button-label']()}
    </Button>
  );
};
