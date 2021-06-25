import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomUnauthorizedException extends HttpException {
  constructor() {
    super('Request is unauthorized!', HttpStatus.FORBIDDEN);
  }
}
