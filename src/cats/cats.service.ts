import { Component, Inject } from '@nestjs/common';
import { Cat } from './cat.entity';

@Component()
export class CatsService {
  constructor(
    @Inject('CatsRepository') private readonly catsRepository: typeof Cat,
  ) {}

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.findAll<Cat>();
  }
}
