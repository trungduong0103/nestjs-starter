import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CatsController } from './modules/cats/cats.controller';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { PetsController } from './modules/pets/pets.controller';
import { PetsModule } from './modules/pets/pets.module';
// import { SubdomainRoutingModule } from './sub-domain-routing/sub-domain-routing.module';

@Module({
  imports: [CatsModule, PetsModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude('/cats-api/(.*)')
      .forRoutes(CatsController, PetsController);
  }
}
