import { Module } from '@nestjs/common';
import { PostRepository } from '@/app/contracts/post-repository';
import { PostRepositoryPrisma } from '@/infra/repositories/post.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: PostRepository,
      useClass: PostRepositoryPrisma,
    },
  ],
  exports: [PostRepository],
})
export class PostPersistenceModule {}
