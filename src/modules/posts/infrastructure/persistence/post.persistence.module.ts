import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostRepository } from '../../domain/repositories/post.repository';

@Module({
  providers: [PrismaService, PostRepository],
  exports: [PostRepository],
})
export class PostPersistenceModule {}
