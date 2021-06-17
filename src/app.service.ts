import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  helloWorld(): string {
    return 'Hello World!';
  }

  byeWorld(): string {
    return 'Bye World!';
  }
}
