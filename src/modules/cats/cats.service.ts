import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

type FindAllCatsOption = {
  orderByName: boolean;
};

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(option?: FindAllCatsOption) {
    const filtered = this.cats.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }

      return 0;
    });

    return option.orderByName ? filtered : this.cats;
  }
}
