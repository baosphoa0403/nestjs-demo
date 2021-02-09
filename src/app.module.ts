import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';  
import { TasksModule } from './tasks/tasks.module';
// import { ProductsModule } from './products/products.module';
// import { CatsModule } from './cats/cats.module';
import { CatModule } from './cat/cat.module';
import config from "../src/config/key";
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://giabao:<VAQKR4ko41FEXFXF>@cluster0.vhwvu.mongodb.net/<Task>?retryWrites=true&w=majority'), CatModule]
})
export class AppModule {}
