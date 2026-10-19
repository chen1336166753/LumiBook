import { Button } from '@lumibook/component';
import { useNavigateHelper } from '@lumibook/core/components/hooks/use-navigate-helper';
import { useI18n } from '@lumibook/i18n';

export const ImportTemplateButton = ({
  name,
  snapshotUrl,
}: {
  name: string;
  snapshotUrl: string;
}) => {
  const t = useI18n();
  const { jumpToImportTemplate } = useNavigateHelper();
  return (
    <Button
      variant="primary"
      onClick={() => jumpToImportTemplate(name, snapshotUrl)}
    >
      {t['com.affine.share-page.header.import-template']()}
    </Button>
  );
};
