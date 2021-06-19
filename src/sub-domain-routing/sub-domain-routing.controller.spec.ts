import { Test, TestingModule } from '@nestjs/testing';
import { SubDomainRoutingController } from './sub-domain-routing.controller';

describe('SubDomainRoutingController', () => {
  let controller: SubDomainRoutingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubDomainRoutingController],
    }).compile();

    controller = module.get<SubDomainRoutingController>(SubDomainRoutingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
