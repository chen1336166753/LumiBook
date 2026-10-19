import { NotificationCountService } from '@lumibook/core/modules/notification';
import { WorkbenchService } from '@lumibook/core/modules/workbench';
import { useLiveData, useService } from '@lumibook/infra';
import { useEffect } from 'react';

export const DocumentTitle = () => {
  const notificationCountService = useService(NotificationCountService);
  const notificationCount = useLiveData(notificationCountService.count$);
  const workbenchService = useService(WorkbenchService);
  const workbenchView = useLiveData(workbenchService.workbench.activeView$);
  const viewTitle = useLiveData(workbenchView.title$);

  useEffect(() => {
    const prefix = notificationCount > 0 ? `(${notificationCount}) ` : '';
    document.title = prefix + (viewTitle ? `${viewTitle} · 识光` : '识光');

    return () => {
      document.title = '识光';
    };
  }, [notificationCount, viewTitle]);

  return null;
};
