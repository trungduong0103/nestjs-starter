import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { SubDomainRoutingController } from './sub-domain-routing/sub-domain-routing.controller';

@Module({
  imports: [],
  controllers: [AppController, SubDomainRoutingController],
  providers: [AppService],
})
export class AppModule {}
