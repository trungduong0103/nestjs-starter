import { Controller, Get } from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('pets-api')
export class PetsController {
  constructor(private petsService: PetsService) {}

  @Get('/get_all_pets')
  findAll() {
    return this.petsService.getAllPets();
  }
}
