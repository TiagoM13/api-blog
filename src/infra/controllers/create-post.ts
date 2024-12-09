import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreatePostUseCase } from 'src/app/use-cases/create-post.use-case';
import { CreatePostDtoInfra } from '../dto/create-post.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostModel } from '../model/swagger/post';

@ApiTags('posts')
@Controller()
export class CreatePostController {
  constructor(private readonly useCase: CreatePostUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new post',
    description: 'This endpoint creates a new post based on the provided data.',
  })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
    type: PostModel,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation error or invalid input.',
    schema: {
      example: {
        message: 'Invalid input data',
      },
    },
  })
  async handle(@Body() dto: CreatePostDtoInfra) {
    return this.useCase.execute(dto);
  }
}
