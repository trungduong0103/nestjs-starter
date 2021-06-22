import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
// import { PetsModule } from './modules/pets/pets.module';
// import { SubdomainRoutingModule } from './sub-domain-routing/sub-domain-routing.module';

@Module({
  imports: [CatsModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats-api');
  }
}
