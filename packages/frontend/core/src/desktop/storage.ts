import { DesktopApiService } from '@lumibook/core/modules/desktop-api';
import {
  CacheStorage,
  GlobalCache,
  GlobalState,
} from '@lumibook/core/modules/storage';
import {
  ElectronGlobalCache,
  ElectronGlobalState,
} from '@lumibook/core/modules/storage/impls/electron';
import { IDBGlobalState } from '@lumibook/core/modules/storage/impls/storage';
import type { Framework } from '@lumibook/infra';

export function configureElectronStateStorageImpls(framework: Framework) {
  framework.impl(GlobalCache, ElectronGlobalCache, [DesktopApiService]);
  framework.impl(GlobalState, ElectronGlobalState, [DesktopApiService]);
  framework.impl(CacheStorage, IDBGlobalState);
}
