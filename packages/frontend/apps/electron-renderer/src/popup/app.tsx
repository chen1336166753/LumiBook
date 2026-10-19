import { ThemeProvider } from '@lumibook/core/components/theme-provider';
import { configureElectronStateStorageImpls } from '@lumibook/core/desktop/storage';
import { configureDesktopApiModule } from '@lumibook/core/modules/desktop-api';
import { configureI18nModule, I18nProvider } from '@lumibook/core/modules/i18n';
import { configureStorageModule } from '@lumibook/core/modules/storage';
import { configureEssentialThemeModule } from '@lumibook/core/modules/theme';
import { appInfo } from '@lumibook/electron-api';
import { Framework, FrameworkRoot } from '@lumibook/infra';

import * as styles from './app.css';
import { Recording } from './recording';

const framework = new Framework();
configureI18nModule(framework);
configureEssentialThemeModule(framework);
configureStorageModule(framework);
configureElectronStateStorageImpls(framework);
configureDesktopApiModule(framework);
const frameworkProvider = framework.provider();

const mode = appInfo?.windowName as 'notification' | 'recording';

export function App() {
  return (
    <FrameworkRoot framework={frameworkProvider}>
      <ThemeProvider>
        <I18nProvider>
          <div className={styles.root} data-is-windows={environment.isWindows}>
            {mode === 'recording' && <Recording />}
          </div>
        </I18nProvider>
      </ThemeProvider>
    </FrameworkRoot>
  );
}
