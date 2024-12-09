import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetAllPostsUseCase } from '@/app/use-cases/get-all-posts.use-case';
import { PostModel } from '../model/swagger/post';

@ApiTags('posts')
@Controller()
export class GetAllPostsController {
  constructor(private readonly useCase: GetAllPostsUseCase) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Retrieve all posts',
    description: 'Returns a list of all posts available in the system.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of posts retrieved successfully.',
    schema: {
      example: {
        posts: [
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
    type: PostModel,
    isArray: true,
  })
  @ApiResponse({
    status: 500,
    description: 'An unexpected error occurred.',
    schema: {
      example: {
        statusCode: 500,
        message: 'Internal server error',
      },
    },
  })
  async handle(): Promise<{ posts: PostModel[] }> {
    return this.useCase.execute();
  }
}
