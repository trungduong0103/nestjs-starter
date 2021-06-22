import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/bye')
  getBye(): string {
    return this.appService.byeWorld();
  }
  @Get('/hello')
  getHello(): string {
    return this.appService.helloWorld();
  }
}
