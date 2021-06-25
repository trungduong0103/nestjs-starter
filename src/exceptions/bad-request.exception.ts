import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomBadRequestException extends HttpException {
  constructor() {
    super('Bad Request received!', HttpStatus.BAD_REQUEST);
  }
}
