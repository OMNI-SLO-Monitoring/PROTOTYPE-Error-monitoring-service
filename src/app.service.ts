import { Injectable, Inject, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Injectable()
export class AppService {

  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) { }

  //log received message into a json file
  async getMessage(error: any) {
    this.logger.log('error', error);
  }

}
