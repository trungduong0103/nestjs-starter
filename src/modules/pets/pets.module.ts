import { Module } from '@nestjs/common';
import { CatsModule } from '../cats/cats.module';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

@Module({
  controllers: [PetsController],
  providers: [PetsService],
  imports: [CatsModule],
})
export class PetsModule {}
