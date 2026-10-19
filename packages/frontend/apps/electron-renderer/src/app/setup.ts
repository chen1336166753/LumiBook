import '@lumibook/core/bootstrap/electron';
import '@lumibook/core/bootstrap/cleanup';
import '@lumibook/component/theme';
import './global.css';
import './native-import';

import { apis } from '@lumibook/electron-api';
import { bindNativeDBApis } from '@lumibook/nbstore/sqlite';
import { bindNativeDBV1Apis } from '@lumibook/nbstore/sqlite/v1';

// oxlint-disable-next-line no-non-null-assertion
bindNativeDBApis(apis!.nbstore);
// oxlint-disable-next-line no-non-null-assertion
bindNativeDBV1Apis(apis!.db);
