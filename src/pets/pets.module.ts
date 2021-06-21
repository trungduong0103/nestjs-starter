import { Module } from '@nestjs/common';
import { CatsModule } from '../cats/cats.module';
import { PetsController } from './pets.controller';

@Module({
  controllers: [PetsController],
  imports: [CatsModule],
})
export class PetsModule {}
