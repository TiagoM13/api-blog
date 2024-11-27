import { Module } from '@nestjs/common';
import { PostModule } from './modules/posts/presentation/controllers/post.module';

@Module({
  imports: [PostModule],
})
export class AppModule {}
