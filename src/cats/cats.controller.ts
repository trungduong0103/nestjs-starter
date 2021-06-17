import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats-api')
export class CatsController {
  @Get('/get_all_cats')
  findAll(): string {
    return 'This action returns all cats.';
  }

  @Get('/get_a_cat_nest')
  getACat(@Req() request: Request): string {
    console.log(request.originalUrl);
    return 'This action returns a cat';
  }

  @Get('/get_a_cat_express')
  getACatExpress(@Req() req: Request, @Res() res: Response) {
    return res.status(200).send('This action returns a cat using express');
  }
}
