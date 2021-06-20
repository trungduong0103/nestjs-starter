import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { SubDomainRoutingController } from './sub-domain-routing/sub-domain-routing.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, SubDomainRoutingController],
  providers: [AppService, CatsService],
})
export class AppModule {}
