// import { Injectable } from '@nestjs/common';
// import { Product } from './product.model';
// import { InjectModel } from '@nestjs/mongoose';
// import {Model} from 'mongoose';
// @Injectable()
// export class ProductsService {
//     // private products: Product[] = [];
//     constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

//     async insertProduct(title:  string, desc: string, price: number): Promise<Product>{
//         const newProduct = new this.productModel({
//             title,
//             desc,
//             price
//         })
//         const result = await newProduct.save();
//         console.log(result);
        
//         return result
//     }
// }
