import { PackageList, type PackageName } from './yarn';

export const PackageToDistribution = new Map<
  PackageName,
  BUILD_CONFIG_TYPE['distribution']
>([
  ['@lumibook/admin', 'admin'],
  ['@lumibook/web', 'web'],
  ['@lumibook/electron-renderer', 'desktop'],
  ['@lumibook/electron', 'desktop'],
  ['@lumibook/mobile', 'mobile'],
  ['@lumibook/ios', 'ios'],
  ['@lumibook/android', 'android'],
]);

export const AliasToPackage = new Map<string, PackageName>([
  ['admin', '@lumibook/admin'],
  ['web', '@lumibook/web'],
  ['electron', '@lumibook/electron'],
  ['desktop', '@lumibook/electron-renderer'],
  ['renderer', '@lumibook/electron-renderer'],
  ['mobile', '@lumibook/mobile'],
  ['ios', '@lumibook/ios'],
  ['android', '@lumibook/android'],
  ['server', '@lumibook/server'],
  ['gql', '@lumibook/graphql'],
  ...PackageList.map(
    pkg => [pkg.name.split('/').pop()!, pkg.name] as [string, PackageName]
  ),
]);
