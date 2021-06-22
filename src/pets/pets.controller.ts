import { Controller, Get } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';

@Controller('pets-api')
export class PetsController {
  constructor(private catsService: CatsService) {}

  @Get('/get_all_pets')
  findAll() {
    return this.catsService.findAll();
  }
}
