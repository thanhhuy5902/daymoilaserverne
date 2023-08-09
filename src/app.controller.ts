import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(@Req() req: any): any {
    return this.appService.get();
  }
}
