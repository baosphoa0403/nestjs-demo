import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema, Cat } from './schema/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }], 'cats')],
  providers: [CatService],
  controllers: [CatController]
})
export class CatModule {}
