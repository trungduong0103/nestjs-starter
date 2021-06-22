import { Module } from '@nestjs/common';
import { SubDomainRoutingController } from './sub-domain-routing.controller';

@Module({
  controllers: [SubDomainRoutingController],
  imports: [],
})
export class SubdomainRoutingModule {}
