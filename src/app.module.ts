import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeverModule } from './sever/sever.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth/auth.service';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [
    SeverModule,
    MongooseModule.forRoot(
      'mongodb+srv://tranthanhhuy050902:thanhhuy2002@cluster0.u2np7x0.mongodb.net/',
    ),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
