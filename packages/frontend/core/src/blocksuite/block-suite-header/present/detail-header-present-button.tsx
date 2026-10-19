import { IconButton } from '@lumibook/component';
import { EditorService } from '@lumibook/core/modules/editor';
import { PresentationIcon } from '@blocksuite/icons/rc';
import { useService } from '@lumibook/infra';

export const DetailPageHeaderPresentButton = () => {
  const editorService = useService(EditorService);

  return (
    <IconButton
      style={{ flexShrink: 0 }}
      size="24"
      onClick={() => editorService.editor.togglePresentation()}
    >
      <PresentationIcon />
    </IconButton>
  );
};
