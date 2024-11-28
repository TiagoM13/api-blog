import { Module } from '@nestjs/common';

import { GetAllPostsUseCase } from 'src/app/use-cases/get-all-posts.use-case';
import { GetPostUseCase } from 'src/app/use-cases/get-post.use-case';
import { CreatePostUseCase } from 'src/app/use-cases/create-post.use-case';
import { UpdatePostUseCase } from 'src/app/use-cases/update-post.use-case';
import { DeletePostUseCase } from 'src/app/use-cases/delete-post.use-case';

import { GetAllPostsController } from '../controllers/get-all-posts';
import { GetPostController } from '../controllers/get-posts';
import { CreatePostController } from '../controllers/create-post';
import { UpdatePostController } from '../controllers/update-post';
import { DeletePostController } from '../controllers/delete-post';

import { PostPersistenceModule } from './persistence/post.persistence.module';

@Module({
  imports: [PostPersistenceModule],
  controllers: [
    GetAllPostsController,
    GetPostController,
    CreatePostController,
    UpdatePostController,
    DeletePostController,
  ],
  providers: [
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
export class PostModule {}
