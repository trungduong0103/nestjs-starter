import { Injectable } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';

@Injectable()
export class PetsService {
  constructor(private readonly catsService: CatsService) {}

  getAllPets() {
    return this.catsService.findAll();
  }
}
