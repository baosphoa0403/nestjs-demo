import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-dto';
import { Cat } from './schema/cat.schema';
// import { CatsService } from './cats.service';
// import { CreateCatDto } from './dto/create-cat.dto';
// import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatController {
  constructor(private readonly catsService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}