import { Injectable, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { CustomBadRequestException } from '../exceptions';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: any) {
    const { error } = this.schema.validate(value);
    if (error) {
      const { message } = error.details[0];
      throw new CustomBadRequestException({
        message,
        error: 'Request body format is invalid',
      });
    }

    return value;
  }
}
