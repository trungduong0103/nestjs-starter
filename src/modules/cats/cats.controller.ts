import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomUnauthorizedException } from '../../exceptions';
import {
  BadRequestExceptionFilter,
  UnauthorizedExceptionFilter,
} from '../../filters';
import { ClassValidatorValidationPipe, ToSpecialCatPipe } from '../../pipes';
import { DefaultCatPipe } from '../../pipes/default-cat.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto, UpdateCatDto } from './dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats-api')
@UseFilters(BadRequestExceptionFilter, UnauthorizedExceptionFilter)
export class CatsController {
  constructor(private catService: CatsService) {}
  // a full example
  @Post('/create_a_cat')
  createACat(
    @Body(
      new DefaultCatPipe({
        name: 'Gentle William',
        age: 1,
        breed: 'Russian short-hair',
      }),
      new ClassValidatorValidationPipe(),
    )
    cat: CreateCatDto,
  ): string {
    this.catService.create(cat);
    return 'This action creates a cat';
  }

  @Post('create_special_cat')
  @UsePipes(new ValidationPipe(), new ToSpecialCatPipe())
  createSpecialCat(@Body() cat: CreateCatDto): string {
    this.catService.create(cat);
    return 'Created a special cat!';
  }

  @Get('/get_all_cats')
  findAll(
    @Query('orderByNameAsc', new DefaultValuePipe(true), ParseBoolPipe)
    orderByNameAsc: boolean,
  ): Cat[] {
    return this.catService.findAll({ orderByNameAsc });
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
