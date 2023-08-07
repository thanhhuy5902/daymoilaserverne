import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { sever } from 'src/schemas/sever.schema';

@Injectable()
export class SeverService {
  constructor(@InjectModel(sever.name) private severModel: Model<sever>) {}

  async create(createCatDto: sever): Promise<sever> {
    const createdCat = new this.severModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<sever[]> {
    return this.severModel.find().exec();
  }

  async findOne(id: string): Promise<sever> {
    return this.severModel.findById(id);
  }
  async update(id: string, updateSeverDto: sever): Promise<sever> {
    return await this.severModel
      .findByIdAndUpdate(id, updateSeverDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<sever> {
    return await this.severModel.findByIdAndRemove(id).exec();
  }
}
