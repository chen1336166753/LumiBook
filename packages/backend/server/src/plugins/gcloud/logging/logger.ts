import { WinstonLogger } from 'nest-winston';

import { LumiBookLogger as RawLumiBookLogger } from '../../../base/logger';

export class LumiBookLogger extends WinstonLogger {
  override error(
    message: any,
    stackOrError?: Error | string | unknown,
    context?: string
  ) {
    super.error(
      message,
      RawLumiBookLogger.formatStack(stackOrError) as string,
      context
    );
  }
}
