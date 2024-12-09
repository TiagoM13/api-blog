import { Module, Global } from '@nestjs/common';
import { PrismaService } from '@/infra/services/prisma/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
