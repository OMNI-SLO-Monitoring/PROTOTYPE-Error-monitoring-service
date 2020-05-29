import { Injectable, Inject, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Injectable()
export class AppService {

  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) { }

  async getMessage(error: any) {
    this.logger.log('error', error);
  }


}
