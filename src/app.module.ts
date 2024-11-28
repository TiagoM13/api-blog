import { Module } from '@nestjs/common';
import { PostModule } from './infra/modules/post.module';

@Module({
  imports: [PostModule],
})
export class AppModule {}
