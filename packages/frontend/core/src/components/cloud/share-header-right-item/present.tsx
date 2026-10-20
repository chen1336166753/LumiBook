import { PresentationIcon } from '@blocksuite/icons/rc';
import { Button } from '@lumibook/component/ui/button';
import { EditorService } from '@lumibook/core/modules/editor';
import { useI18n } from '@lumibook/i18n';
import { useLiveData, useService } from '@lumibook/infra';

import * as styles from './styles.css';

export const PresentButton = () => {
  const t = useI18n();
  const editorService = useService(EditorService);
  const isPresent = useLiveData(editorService.editor.isPresenting$);

  return (
    <Button
      prefix={<PresentationIcon />}
      className={styles.presentButton}
      onClick={() => editorService.editor.togglePresentation()}
      disabled={isPresent}
    >
      {t['com.affine.share-page.header.present']()}
    </Button>
  );
};
