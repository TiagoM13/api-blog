import { Controller, Get, Param } from '@nestjs/common';
import { GetPostUseCase } from 'src/app/use-cases/get-post.use-case';

@Controller()
export class GetPostController {
  constructor(private readonly useCase: GetPostUseCase) {}

  @Get(':id')
  async handle(@Param('id') id: string) {
    return this.useCase.execute(id);
  }
}
