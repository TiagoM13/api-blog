import { Module } from '@nestjs/common';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostRepository } from './repositories/posts.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostRepository, PrismaService],
})
export class PostsModule {}
