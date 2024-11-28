import { Controller, Get } from '@nestjs/common';
import { GetAllPostsUseCase } from 'src/app/use-cases/get-all-posts.use-case';

@Controller()
export class GetAllPostsController {
  constructor(private readonly useCase: GetAllPostsUseCase) {}

  @Get()
  async handle() {
    return this.useCase.execute();
  }
}
