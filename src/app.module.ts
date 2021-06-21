import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PetsModule } from './pets/pets.module';
import { SubdomainRoutingModule } from './sub-domain-routing/sub-domain-routing.module';

@Module({
  imports: [CatsModule, PetsModule, SubdomainRoutingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
