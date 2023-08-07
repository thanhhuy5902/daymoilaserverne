import { Module } from '@nestjs/common';
import { SeverService } from './sever.service';
import { SeverController } from './sever.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { sever, severSchema } from 'src/schemas/sever.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: sever.name, schema: severSchema }]),
  ],
  controllers: [SeverController],
  providers: [SeverService],
})
export class SeverModule {}
