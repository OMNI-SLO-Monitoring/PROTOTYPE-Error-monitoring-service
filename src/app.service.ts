import { Injectable, Inject, Logger } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Injectable()
export class AppService {

  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) { }

  //log received message into a json file together with its error type
  async getMessage(error: any) {
    if (error.level === 'circuit_breaker_error') {
      this.logger.log('circuit_breaker_error', error);
    } else {
      this.logger.log('error', error);
    }
  }

}
