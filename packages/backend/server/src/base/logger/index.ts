import { Global, Module } from '@nestjs/common';

import { ConfigModule } from '../config';
import { LumiBookLogger } from './service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [LumiBookLogger],
  exports: [LumiBookLogger],
})
export class LoggerModule {}

export { LumiBookLogger } from './service';
