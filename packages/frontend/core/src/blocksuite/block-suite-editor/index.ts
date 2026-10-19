import { registerAIEditorEffects } from '@lumibook/core/blocksuite/ai/effects/editor';
import { editorEffects } from '@lumibook/core/blocksuite/editors';

import { registerTemplates } from './register-templates';

editorEffects();
registerAIEditorEffects();
registerTemplates();

export * from './blocksuite-editor';
