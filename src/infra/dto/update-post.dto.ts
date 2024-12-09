import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDtoInfra } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDtoInfra extends PartialType(CreatePostDtoInfra) {
  @ApiProperty({
    description: 'The title of the post, between 5 and 255 characters.',
    example: 'Introduction to NestJS with Prisma',
    required: false,
  })
  title?: string;

  @ApiProperty({
    description: 'The content of the post.',
    example:
      'NestJS is a powerful framework for building scalable applications...',
    required: false,
  })
  content?: string;

  @ApiProperty({
    description: 'The author of the post, between 5 and 255 characters.',
    example: 'John Doe',
    required: false,
  })
  author?: string;

  @ApiProperty({
    description: 'URL to the thumbnail image of the post.',
    example: 'https://example.com/thumbnail.jpg',
    required: false,
  })
  thumbnail?: string;

  @ApiProperty({
    description:
      'The category of the post, optional and between 5 and 50 characters.',
    example: 'Web Development',
    required: false,
  })
  category?: string;

  @ApiProperty({
    description:
      'A list of tags related to the post. Each tag is a string, optional.',
    example: ['nestjs', 'prisma', 'backend'],
    required: false,
  })
  tags?: string[];

  @ApiProperty({
    description:
      'The published date of the post, optional and should be a valid ISO string.',
    example: '2024-11-27T10:00:00.000Z',
    required: false,
  })
  publishedAt?: Date;
}
