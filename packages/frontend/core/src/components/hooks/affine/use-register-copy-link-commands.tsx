import {
  PreconditionStrategy,
  registerAffineCommand,
} from '@lumibook/core/commands';
import { useSharingUrl } from '@lumibook/core/components/hooks/affine/use-share-url';
import { getDefaultShareMode } from '@lumibook/core/components/hooks/affine/use-share-url.utils';
import { EditorService } from '@lumibook/core/modules/editor';
import { useIsActiveView } from '@lumibook/core/modules/workbench';
import type { WorkspaceMetadata } from '@lumibook/core/modules/workspace';
import { track } from '@lumibook/track';
import { useLiveData, useService } from '@lumibook/infra';
import { useEffect } from 'react';

export function useRegisterCopyLinkCommands({
  workspaceMeta,
  docId,
}: {
  workspaceMeta: WorkspaceMetadata;
  docId: string;
}) {
  const isActiveView = useIsActiveView();
  const workspaceId = workspaceMeta.id;
  const isCloud = workspaceMeta.flavour !== 'local';
  const currentMode = useLiveData(useService(EditorService).editor.mode$);

  const { onClickCopyLink } = useSharingUrl({
    workspaceId,
    pageId: docId,
  });

  useEffect(() => {
    if (!isActiveView) {
      return;
    }
    const unsubs: Array<() => void> = [];

    unsubs.push(
      registerAffineCommand({
        id: `affine:share-private-link:${docId}`,
        category: 'affine:general',
        preconditionStrategy: PreconditionStrategy.Never,
        keyBinding: {
          binding: '$mod+Shift+c',
        },
        label: '',
        icon: null,
        run() {
          track.$.cmdk.general.copyShareLink();
          isActiveView &&
            isCloud &&
            onClickCopyLink(getDefaultShareMode(currentMode));
        },
      })
    );
    return () => {
      unsubs.forEach(unsub => unsub());
    };
  }, [currentMode, docId, isActiveView, isCloud, onClickCopyLink]);
}
