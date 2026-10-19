import { SubscriptionPlan } from '@lumibook/graphql';
import { useI18n } from '@lumibook/i18n';
import { useLiveData, useService } from '@lumibook/infra';
import { useEffect } from 'react';
import type { FallbackProps } from 'react-error-boundary';

import { SWRErrorBoundary } from '../../../../../components/pure/swr-error-bundary';
import { SubscriptionService } from '../../../../../modules/cloud';
import { AIPlan } from './ai/ai-plan';
import { CloudPlans } from './cloud-plans';
import { CloudPlanLayout, PlanLayout } from './layout';
import { PlansSkeleton } from './skeleton';
import * as styles from './style.css';

const Settings = () => {
  const subscriptionService = useService(SubscriptionService);
  const prices = useLiveData(subscriptionService.prices.prices$);

  useEffect(() => {
    subscriptionService.subscription.revalidate();
    subscriptionService.prices.revalidate();
  }, [subscriptionService]);

  if (prices === null) {
    return <PlansSkeleton />;
  }

  if (
    !prices.some(price => price.plan === SubscriptionPlan.Pro) ||
    !prices.some(price => price.plan === SubscriptionPlan.Team)
  ) {
    return <PlansError retry={() => subscriptionService.prices.revalidate()} />;
  }

  return <PlanLayout cloud={<CloudPlans />} ai={<AIPlan />} />;
};

export const LumiBookPricingPlans = () => {
  return (
    <SWRErrorBoundary FallbackComponent={PlansErrorBoundary}>
      <Settings />
    </SWRErrorBoundary>
  );
};

const PlansErrorBoundary = ({ resetErrorBoundary }: FallbackProps) => {
  return <PlansError retry={resetErrorBoundary} />;
};

const PlansError = ({ retry }: { retry: () => void }) => {
  const t = useI18n();

  const scroll = (
    <div className={styles.errorTip}>
      <span>{t['com.affine.payment.plans-error-tip']()}</span>
      <a onClick={retry} className={styles.errorTipRetry}>
        {t['com.affine.payment.plans-error-retry']()}
      </a>
    </div>
  );

  return <PlanLayout cloud={<CloudPlanLayout scroll={scroll} />} />;
};
