import type { DocMode } from '@blocksuite/affine/model';
import { ViewLayersIcon } from '@blocksuite/icons/rc';
import { Button, useConfirmModal } from '@lumibook/component';
import { usePageHelper } from '@lumibook/core/blocksuite/block-suite-page-list/utils';
import { PageListNewPageButton } from '@lumibook/core/components/page-list';
import {
  type Collection,
  CollectionService,
} from '@lumibook/core/modules/collection';
import { WorkspaceDialogService } from '@lumibook/core/modules/dialogs';
import type { DocRecord } from '@lumibook/core/modules/doc';
import { WorkbenchLink } from '@lumibook/core/modules/workbench';
import { WorkspaceService } from '@lumibook/core/modules/workspace';
import { useI18n } from '@lumibook/i18n';
import { useLiveData, useServices } from '@lumibook/infra';
import track from '@lumibook/track';
import { useCallback } from 'react';

import * as styles from './index.css';

export const CollectionListHeader = ({
  collection,
}: {
  collection: Collection;
}) => {
  const t = useI18n();
  const { collectionService, workspaceService, workspaceDialogService } =
    useServices({
      CollectionService,
      WorkspaceService,
      WorkspaceDialogService,
    });

  const handleEdit = useCallback(() => {
    track.collection.collection.$.editCollection();
    workspaceDialogService.open('collection-editor', {
      collectionId: collection.id,
    });
  }, [collection, workspaceDialogService]);

  const workspace = workspaceService.workspace;
  const { createEdgeless, createPage } = usePageHelper(workspace.docCollection);
  const { openConfirmModal } = useConfirmModal();
  const name = useLiveData(collection.name$);

  const createAndAddDocument = useCallback(
    (createDocumentFn: () => DocRecord) => {
      const newDoc = createDocumentFn();
      collectionService.addDocToCollection(collection.id, newDoc.id);
    },
    [collection.id, collectionService]
  );

  const onConfirmAddDocument = useCallback(
    (createDocumentFn: () => DocRecord) => {
      openConfirmModal({
        title: t['com.affine.collection.add-doc.confirm.title'](),
        description: t['com.affine.collection.add-doc.confirm.description'](),
        cancelText: t['Cancel'](),
        confirmText: t['Confirm'](),
        confirmButtonOptions: {
          variant: 'primary',
        },
        onConfirm: () => createAndAddDocument(createDocumentFn),
      });
    },
    [openConfirmModal, t, createAndAddDocument]
  );

  const createPageModeDoc = useCallback(
    () => createPage('page' as DocMode),
    [createPage]
  );

  const onCreateEdgeless = useCallback(
    () => onConfirmAddDocument(createEdgeless),
    [createEdgeless, onConfirmAddDocument]
  );
  const onCreatePage = useCallback(() => {
    onConfirmAddDocument(createPageModeDoc);
  }, [createPageModeDoc, onConfirmAddDocument]);
  const onCreateDoc = useCallback(() => {
    onConfirmAddDocument(createPage);
  }, [createPage, onConfirmAddDocument]);

  return (
    <header className={styles.collectionHeader}>
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbItem}>
          <WorkbenchLink to="/collection" className={styles.breadcrumbLink}>
            {t['com.affine.collections.header']()}
          </WorkbenchLink>
        </div>
        <div className={styles.breadcrumbSeparator}>/</div>
        <div className={styles.breadcrumbItem} data-active={true}>
          <ViewLayersIcon className={styles.breadcrumbIcon} />
          {name}
        </div>
      </div>

      <div className={styles.headerActions}>
        <Button onClick={handleEdit}>{t['Edit']()}</Button>
        <PageListNewPageButton
          size="small"
          data-testid="new-page-button-trigger"
          onCreateDoc={onCreateDoc}
          onCreateEdgeless={onCreateEdgeless}
          onCreatePage={onCreatePage}
        >
          <div className={styles.newPageButtonText}>{t['New Page']()}</div>
        </PageListNewPageButton>
      </div>
    </header>
  );
};
