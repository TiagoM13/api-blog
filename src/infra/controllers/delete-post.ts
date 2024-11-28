import { Controller, Delete, Param } from '@nestjs/common';
import { DeletePostUseCase } from 'src/app/use-cases/delete-post.use-case';

@Controller()
export class DeletePostController {
  constructor(private readonly useCase: DeletePostUseCase) {}

  @Delete(':id')
  async handle(@Param('id') id: string) {
    await this.useCase.execute(id);
  }
}
