import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

//custom error levels for logging into json file
let customLevels = {
  levels: {
    error: 0,
    circuit_breaker_error: 1,
    warn: 2,
    info: 3,
    http: 4,
    verbose: 5,
    debug: 6,
    silly: 7
  }
}
@Module({
  imports: [
    WinstonModule.forRoot({
      format: winston.format.json(),
      levels: customLevels.levels,
      transports: [
        new winston.transports.File({
          filename: 'error-report.json',
        }),
        new winston.transports.Console()
      ]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
