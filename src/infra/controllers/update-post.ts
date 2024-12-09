import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { UpdatePostUseCase } from 'src/app/use-cases/update-post.use-case';
import { UpdatePostDtoInfra } from '../dto/update-post.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostModel } from '../model/swagger/post';

@ApiTags('posts')
@Controller()
export class UpdatePostController {
  constructor(private readonly useCase: UpdatePostUseCase) {}

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Update a post',
    description:
      'Update an existing post by providing its unique identifier and updated data.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'The unique identifier of the post to update.',
  })
  @ApiResponse({
    status: 200,
    description: 'Post updated successfully.',
    type: PostModel,
    schema: {
      example: {
        post: {
          id: '79bb8484-09b1-43fc-ac96-109b41da186e',
          title: 'Updated Title for Post',
          content: 'Updated content for the post...',
          author: 'John Doe',
          category: 'Web Development',
          tags: ['nestjs', 'prisma', 'backend'],
          isPublished: false,
          publishedAt: null,
          thumbnail: 'https://example.com/updated-thumbnail.jpg',
          createdAt: '2024-11-27T10:00:00.000Z',
          updatedAt: '2024-11-27T11:00:00.000Z',
        },
      },
    },
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
    status: 400,
    description: 'Validation error or invalid input.',
    schema: {
      example: {
        message: 'Invalid input data',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
    schema: {
      example: {
        message: 'Internal server error',
      },
    },
  })
  async handle(@Param('id') id: string, @Body() dto: UpdatePostDtoInfra) {
    return this.useCase.execute(id, dto);
  }
}
