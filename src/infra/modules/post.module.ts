import { Module } from '@nestjs/common';

import { GetAllPostsUseCase } from '@/app/use-cases/get-all-posts.use-case';
import { GetPostUseCase } from '@/app/use-cases/get-post.use-case';
import { CreatePostUseCase } from '@/app/use-cases/create-post.use-case';
import { UpdatePostUseCase } from '@/app/use-cases/update-post.use-case';
import { DeletePostUseCase } from '@/app/use-cases/delete-post.use-case';
import { UpdateIsPublishedUseCase } from '@/app/use-cases/update-is-published.use-case';

import { GetAllPostsController } from '../controllers/get-all-posts';
import { GetPostController } from '../controllers/get-posts';
import { CreatePostController } from '../controllers/create-post';
import { UpdatePostController } from '../controllers/update-post';
import { UpdateIsPublishedController } from '../controllers/update-is-published';
import { DeletePostController } from '../controllers/delete-post';

import { PostPersistenceModule } from './persistence/post.persistence.module';

@Module({
  imports: [PostPersistenceModule],
  controllers: [
    GetAllPostsController,
    GetPostController,
    CreatePostController,
    UpdatePostController,
    UpdateIsPublishedController,
    DeletePostController,
  ],
  providers: [
    CreatePostUseCase,
    GetAllPostsUseCase,
    GetPostUseCase,
    UpdatePostUseCase,
    UpdateIsPublishedUseCase,
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
export class PostModule {}
