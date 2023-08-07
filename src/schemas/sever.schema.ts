import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type severDocument = HydratedDocument<sever>;

@Schema({ timestamps: true })
export class sever {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  imgUrl: string;

  @Prop()
  quality: number;

  @Prop()
  description: string;
}

export const severSchema = SchemaFactory.createForClass(sever);
