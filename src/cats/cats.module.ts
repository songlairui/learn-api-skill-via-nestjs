import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CatsService } from './cats.service';
import { catsProviders } from './cats.providers';
import { CatsController } from './cats.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CatsController],
  providers: [CatsService, ...catsProviders],
})
export class CatsModule {}
