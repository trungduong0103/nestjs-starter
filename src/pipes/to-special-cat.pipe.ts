import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateCatDto } from '../modules/cats/dto';

@Injectable()
export class ToSpecialCatPipe
  implements PipeTransform<CreateCatDto, CreateCatDto>
{
  transform(value: CreateCatDto): CreateCatDto {
    const { name } = value;
    return {
      ...value,
      name: `Super duper ${name} - Ruler of the Milky Way!!!`,
    };
  }
}
