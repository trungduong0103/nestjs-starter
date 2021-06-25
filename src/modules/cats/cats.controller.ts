import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Redirect,
  Req,
  Res,
  UseFilters,
} from '@nestjs/common';
import { Request, Response } from 'express';
import {
  CustomBadRequestException,
  CustomUnauthorizedException,
} from '../../exceptions';
import {
  BadRequestExceptionFilter,
  UnauthorizedExceptionFilter,
} from '../../filters';
import { CatsService } from './cats.service';
import { CreateCatDto, ListAllCatsDto, UpdateCatDto } from './dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats-api')
@UseFilters(BadRequestExceptionFilter, UnauthorizedExceptionFilter)
export class CatsController {
  constructor(private catService: CatsService) {}
  // a full example
  @Post('/create_a_cat')
  createACat(@Body() cat: CreateCatDto): string {
    if (!cat.age || !cat.breed || !cat.name) {
      throw new CustomBadRequestException();
    }
    this.catService.create(cat);
    return 'This action creates a cat';
  }

  @Get('/get_all_cats')
  findAll(): Cat[] {
    return this.catService.findAll();
  }

  @Get('/list_all_cats')
  listAllCats(@Query() query: ListAllCatsDto): string {
    const { limit, orderBy } = query;
    return `This action list all cats by ${limit} and order by ${orderBy}.`;
  }

  @Get('/get_cat/:id')
  findOne(@Param('id') id: string): string {
    return `This action returns cat #${id}.`;
  }

  @Get('/forbidden_cat')
  forbidden() {
    throw new CustomUnauthorizedException();
  }

  @Put('/update_cat/:id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
    const { name, age, breed } = updateCatDto;
    return `This action updates cats #${id} with name: ${name}, age: ${age}, breed: ${breed}`;
  }

  @Delete('/delete_cat/:id')
  delete(@Param('id') id: string): string {
    return `This action delete cats #${id}.`;
  }

  // end of example

  @Get('/get_a_cat_nest')
  getACat(@Req() request: Request): string {
    return `This action returns a cat from ${request.originalUrl}`;
  }

  @Get('/get_a_cat_express')
  getACatExpress(@Res() res: Response) {
    return res
      .status(HttpStatus.I_AM_A_TEAPOT)
      .send('This action returns a cat using express.');
  }

  @Get('/get_a_cat_with_param/:id/:age')
  getACatWithParam(@Param('id') id: number, @Param('age') age: number): string {
    return `This action gets a cat with id: ${id}, and age: ${age}.`;
  }

  @Get('/get_cat_wildcard/ab*cd')
  getCatWildCard(): string {
    return 'This action returns a wildcard cat.';
  }

  @Get('/redirect')
  @Redirect('https://notion.so', 301)
  redirect(): string {
    return "you won't see this because you are redirected to somewhere else.";
  }

  @Get('/redirect_controller')
  @Redirect('/bye', 301)
  redirectController(): string {
    return 'redirected to AppController';
  }

  @Get('/override_redirect_decorator')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version: string) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/', statusCode: 301 };
    }
  }

  @Get('/get_all_cats_async')
  async getAllCatsAsync(): Promise<CreateCatDto[]> {
    return [
      {
        name: 'Tom',
        age: 2,
        breed: 'Russian short-hair',
      },
      {
        name: 'Hugo',
        age: 3,
        breed: 'Minx',
      },
    ];
  }

  @Post('/post_a_cat')
  postACat(
    @Body() reqBody: CreateCatDto,
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
    return 'This action returns a 204 response.';
  }

  @Post('/post_header')
  @Header('Cache-Control', 'none')
  postHeader(): string {
    return 'Post action with header.';
  }
}
