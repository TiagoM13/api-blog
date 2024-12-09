import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeletePostUseCase } from 'src/app/use-cases/delete-post.use-case';

@ApiTags('posts')
@Controller()
export class DeletePostController {
  constructor(private readonly useCase: DeletePostUseCase) {}

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Delete a post',
    description: 'Deletes a post by its unique identifier.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'The unique identifier of the post to delete.',
  })
  @ApiResponse({
    status: 200,
    description: 'Post successfully deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Post not found.',
    schema: {
      example: {
        message: 'Post not found',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'An unexpected error occurred.',
    schema: {
      example: {
        message: 'Internal server error',
      },
    },
  })
  async handle(@Param('id') id: string) {
    await this.useCase.execute(id);
  }
}
