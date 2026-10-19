import { setupGlobal } from '@lumibook/env/global';
import { getBuildConfig } from '@lumibook/utils/build-config';
import { Package } from '@lumibook/utils/workspace';

globalThis.BUILD_CONFIG = getBuildConfig(new Package('@lumibook/web'), {
  mode: 'development',
  channel: 'canary',
});

if (typeof window !== 'undefined') {
  window.location.search = '?prefixUrl=http://127.0.0.1:3010/';
}

setupGlobal();
