import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetPostUseCase } from 'src/app/use-cases/get-post.use-case';
import { PostModel } from '../model/swagger/post';

@ApiTags('posts')
@Controller()
export class GetPostController {
  constructor(private readonly useCase: GetPostUseCase) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Find a post by ID',
    description:
      'Retrieve the details of a specific post using its unique identifier.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'The unique identifier of the post to retrieve.',
  })
  @ApiResponse({
    status: 200,
    description: 'Post found successfully.',
    type: PostModel,
    schema: {
      example: {
        post: [
          {
            id: '79bb8484-09b1-43fc-ac96-109b41da186e',
            title: 'Introduction to NestJS with Prisma',
            content:
              'NestJS is a powerful framework for building scalable applications...',
            author: 'John Doe',
            category: 'Web Development',
            tags: ['nestjs', 'prisma', 'backend'],
            isPublished: true,
            publishedAt: '2024-11-27T10:00:00.000Z',
            thumbnail: 'https://example.com/thumbnail.jpg',
            createdAt: '2024-11-27T10:00:00.000Z',
            updatedAt: '2024-11-27T10:00:00.000Z',
          },
        ],
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
    status: 500,
    description: 'Internal server error.',
    schema: {
      example: {
        message: 'Internal server error',
      },
    },
  })
  async handle(@Param('id') id: string) {
    return this.useCase.execute(id);
  }
}
