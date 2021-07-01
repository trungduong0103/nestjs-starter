import { DefaultValuePipe, Injectable } from '@nestjs/common';
import { CreateCatDto } from '../modules/cats/dto';

@Injectable()
export class DefaultCatPipe extends DefaultValuePipe {
  private readonly classDefaultValue: CreateCatDto;

  constructor(defaultValue: CreateCatDto) {
    super(defaultValue);
    this.classDefaultValue = defaultValue;
  }

  transform(value: CreateCatDto) {
    if (Object.keys(value).length === 0) {
      return this.classDefaultValue;
    }

    return value;
  }
}
