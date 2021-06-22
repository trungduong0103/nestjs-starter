import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller({ host: 'localhost', path: '/sub-domain' })
export class SubDomainRoutingController {
  @Get()
  getIndex(@Req() req: Request): string {
    console.log(req);
    return 'This action returns the index page.';
  }
}
