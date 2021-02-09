    import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schema/cat.schema';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-dto';

@Injectable()
export class CatService {
    constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

    async create(createCatDto: CreateCatDto): Promise<Cat> {
      const createdCat = new this.catModel(createCatDto);
      return createdCat.save();
    }
  
    async findAll(): Promise<Cat[]> {
      return this.catModel.find().exec();
    }
}
