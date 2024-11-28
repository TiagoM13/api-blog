import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostUseCase } from 'src/app/use-cases/create-post.use-case';
import { CreatePostDtoInfra } from '../dto/create-post.dto';

@Controller()
export class CreatePostController {
  constructor(private readonly useCase: CreatePostUseCase) {}

  @Post()
  async handle(@Body() dto: CreatePostDtoInfra) {
    return this.useCase.execute(dto);
  }
}
