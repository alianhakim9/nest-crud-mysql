import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './model/product.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts() {
    return this.productsService.get();
  }

  @Post('create')
  async createProduct(@Body() product: Product) {
    return this.productsService.store(product);
  }
}
