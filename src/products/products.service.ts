import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './model/product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async get(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async store(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }
}
