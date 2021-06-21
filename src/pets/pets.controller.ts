import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';

@Controller('pets-api')
export class PetsController {
  constructor(private catsService: CatsService) {}

  @Post('/add_pet')
  add() {
    return this.catsService.cats.push();
  }

  @Get('/get_all_pets')
  findAll() {
    return this.catsService.findAll();
  }
}
