import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeverModule } from './sever/sever.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    SeverModule,
    MongooseModule.forRoot(
      'mongodb+srv://tranthanhhuy050902:thanhhuy2002@cluster0.u2np7x0.mongodb.net/',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
