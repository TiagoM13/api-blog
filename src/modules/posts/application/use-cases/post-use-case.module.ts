import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostRepository } from '../../domain/repositories/post.repository';
import { CreatePostUseCase } from './create-post.use-case';
import { GetAllPostsUseCase } from './get-all-posts.use-case';
import { GetPostUseCase } from './get-post.use-case';
import { UpdatePostUseCase } from './update-post.use-case';
import { DeletePostUseCase } from './delete-post.use-case';

@Module({
  providers: [
    PrismaService,
    PostRepository,
    CreatePostUseCase,
    GetAllPostsUseCase,
    GetPostUseCase,
    UpdatePostUseCase,
    DeletePostUseCase,
  ],
  exports: [
    CreatePostUseCase,
    GetAllPostsUseCase,
    GetPostUseCase,
    UpdatePostUseCase,
    DeletePostUseCase,
  ],
})
export class PostUseCaseModule {}
