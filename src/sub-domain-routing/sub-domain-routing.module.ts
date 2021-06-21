import { Module } from '@nestjs/common';
import { CatsModule } from '../cats/cats.module';
import { SubDomainRoutingController } from './sub-domain-routing.controller';

@Module({
  controllers: [SubDomainRoutingController],
  imports: [CatsModule],
})
export class SubdomainRoutingModule {}
