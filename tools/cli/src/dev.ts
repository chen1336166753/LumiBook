import type { PackageName } from '@lumibook/utils/workspace';

import { Option, PackageSelectorCommand } from './command';

export class DevCommand extends PackageSelectorCommand {
  static override paths = [['dev'], ['d']];

  protected override availablePackages: PackageName[] = [
    '@lumibook/web',
    '@lumibook/server',
    '@lumibook/electron',
    '@lumibook/electron-renderer',
    '@lumibook/mobile',
    '@lumibook/ios',
    '@lumibook/android',
    '@lumibook/admin',
  ];

  protected deps = Option.Boolean('--deps', {
    description: 'Run dev with dependencies',
  });

  async execute() {
    const name = await this.getPackage();
    const args = [];

    if (this.deps) {
      args.push('--deps');
    }

    args.push(name, 'dev');

    await this.cli.run(args);
  }
}
