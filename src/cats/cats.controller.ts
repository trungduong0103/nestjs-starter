import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

type Cat = {
  catName: string;
  catAge: number;
};

interface catDto {
  catName: string;
  catAge: number;
}

@Controller('cats-api')
export class CatsController {
  @Get('/get_all_cats')
  findAll(): string {
    return 'This action returns all cats.';
  }

  @Get('/get_a_cat_nest')
  getACat(@Req() request: Request): string {
    return `This action returns a cat from ${request.originalUrl}`;
  }

  @Get('/get_a_cat_express')
  getACatExpress(@Req() req: Request, @Res() res: Response) {
    return res.status(200).send('This action returns a cat using express.');
  }

  @Get('/get_a_cat_with_param/:id/:age')
  getACatWithParam(@Param('id') id: number, @Param('age') age: number): string {
    return `This action gets a cat with id: ${id}, and age: ${age}`;
  }

  @Get('/get_cat_wildcard/ab*cd')
  getCatWildCard(): string {
    return 'This action returns a wildcard cat';
  }

  @Get('/redirect')
  @Redirect('https://notion.so', 301)
  redirect(): string {
    return 'redirect to somewhere else';
  }

  @Get('/override_redirect_decorator')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/', statusCode: 301 };
    }
  }

  @Post('/post_a_cat')
  postACat(
    @Body() reqBody: catDto,
    @Body('catAge') catAge: number,
    @Body('catName') catName: string,
    @Param() reqParam,
    @Query() reqQuery,
  ): string {
    const reqBodyString = JSON.stringify(reqBody);
    const reqParamString = JSON.stringify(reqParam);
    const reqQueryString = JSON.stringify(reqQuery);
    return `This action post a cat with reqBody: ${reqBodyString}, reqParam: ${reqParamString}, reqQuery: ${reqQueryString}, cat name: ${catName}, cat age: ${catAge}.`;
  }

  @Post('/post_anything')
  @HttpCode(204)
  return204(): string {
    return 'This action returns a 204 response';
  }

  @Post('/post_header')
  @Header('Cache-Control', 'none')
  postHeader(): string {
    return 'Post action with header';
  }

  @Get('/get_all_cats_async')
  async getAllCatsAsync(): Promise<Cat[]> {
    return [
      {
        catName: 'Tom',
        catAge: 2,
      },
      {
        catName: 'Hugo',
        catAge: 3,
      },
    ];
  }
}
