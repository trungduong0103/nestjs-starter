import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { PetsModule } from './modules/pets/pets.module';
// import { PetsModule } from './pets/pets.module';
// import { SubdomainRoutingModule } from './sub-domain-routing/sub-domain-routing.module';

@Module({
  imports: [CatsModule, PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
