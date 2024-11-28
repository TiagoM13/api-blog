import { Module } from '@nestjs/common';
import { PostRepository } from 'src/app/contracts/post-repository';
import { PostRepositoryPrisma } from 'src/infra/repositories/post.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Certifique-se de que o PrismaModule está importado
  providers: [
    {
      provide: PostRepository,
      useClass: PostRepositoryPrisma, // Implementação concreta
    },
  ],
  exports: [PostRepository], // Exporte o repositório para que outros módulos possam usá-lo
})
export class PostPersistenceModule {}
