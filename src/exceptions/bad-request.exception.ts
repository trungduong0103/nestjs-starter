import { HttpException, HttpStatus } from '@nestjs/common';

interface BadRequestErrorInterface {
  message: string;
  error: string;
}

export class CustomBadRequestException extends HttpException {
  constructor({ message, error }: BadRequestErrorInterface) {
    super({ message, error }, HttpStatus.BAD_REQUEST);
  }
}
