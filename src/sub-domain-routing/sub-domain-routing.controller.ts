import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from '../cats/cats.service';

@Controller({ host: 'localhost', path: '/sub-domain' })
export class SubDomainRoutingController {
  constructor(private readonly catsService: CatsService) {}
  @Get('/test')
  test() {
    return this.catsService.findAll();
  }

  @Get()
  getIndex(@Req() req: Request): string {
    console.log(req);
    return 'This action returns the index page.';
  }
}
