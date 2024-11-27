import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostUseCaseModule } from '../../application/use-cases/post-use-case.module';

@Module({
  imports: [PostUseCaseModule],
  controllers: [PostController],
})
export class PostModule {}
