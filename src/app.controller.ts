import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // process the error message sent from service A and log it into 'error-report.json'
  @Post()
  async saveErrResponse(@Body() error: any) {
    return this.appService.getMessage(error);
  }

}

