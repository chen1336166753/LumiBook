import { Service } from '@lumibook/infra';

import {
  EditorSetting,
  type EditorSettingExt,
} from '../entities/editor-setting';

export class EditorSettingService extends Service {
  editorSetting = this.framework.createEntity(
    EditorSetting
  ) as EditorSettingExt;
}
