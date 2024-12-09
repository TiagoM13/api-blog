import { Module, Global } from '@nestjs/common';
import { PrismaService } from '@/infra/services/prisma/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Torna o PrismaService disponível para outros módulos
})
export class PrismaModule {}
