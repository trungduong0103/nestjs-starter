import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

type FindAllCatsOption = {
  orderByNameAsc: boolean;
};

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(option?: FindAllCatsOption) {
    const { orderByNameAsc } = option;
    const filtered = this.cats.sort((a, b) => {
      if (a.name > b.name) {
        return orderByNameAsc ? 1 : -1;
      }
      if (a.name < b.name) {
        return orderByNameAsc ? -1 : 1;
      }

      return 0;
    });

    return filtered;
  }
}
