import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { CustomUnauthorizedException } from '../../exceptions';
import {
  BadRequestExceptionFilter,
  UnauthorizedExceptionFilter,
} from '../../filters';
import { JoiValidationPipe } from '../../pipes';
import { CatsService } from './cats.service';
import { CreateCatDto, ListAllCatsDto, UpdateCatDto } from './dto';
import { Cat } from './interfaces/cat.interface';
import createCatSchema from './schemas/create-cat.schema';

@Controller('cats-api')
@UseFilters(BadRequestExceptionFilter, UnauthorizedExceptionFilter)
export class CatsController {
  constructor(private catService: CatsService) {}
  // a full example
  @Post('/create_a_cat')
  @UsePipes(new JoiValidationPipe(createCatSchema))
  createACat(@Body() cat: CreateCatDto): string {
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
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): string {
    return `This action returns cat #${id}.`;
  }

  @Get('/query_cat')
  findOneQuery(@Query('id', ParseIntPipe) id: number): string {
    return `This action returns cat ${id}.`;
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
}
