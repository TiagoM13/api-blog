import { ApiProperty } from '@nestjs/swagger';
import { Post } from 'src/domain/entities/post.entity';

export class PostModel implements Post {
  @ApiProperty({
    description: 'Unique identifier of the post',
    example: '79bb8484-09b1-43fc-ac96-109b41da186e',
  })
  id?: string;

  @ApiProperty({
    description: 'Title of the post',
    example: 'Introduction to NestJS with Prisma',
  })
  title: string;

  @ApiProperty({
    description: 'Content of the post',
    example:
      'NestJS is a powerful framework for building scalable Node.js applications...',
  })
  content: string;

  @ApiProperty({ description: 'Name of the author', example: 'Tiago Mota' })
  author: string;

  @ApiProperty({
    description: 'URL of the post thumbnail',
    example: 'https://example.com/thumbnail.jpg',
  })
  thumbnail: string;

  @ApiProperty({
    description: 'Category of the post',
    example: 'Web Development',
  })
  category?: string;

  @ApiProperty({
    description: 'Tags associated with the post',
    example: ['nestjs', 'prisma', 'backend'],
  })
  tags?: string[];

  @ApiProperty({ description: 'Publication status', example: true })
  isPublished?: boolean;

  @ApiProperty({
    description: 'Publication timestamp (if published)',
    example: '2024-11-27T10:00:00.000Z',
  })
  publishedAt?: Date;

  @ApiProperty({
    description: 'Timestamp of post creation',
    example: '2024-11-27T10:00:00.000Z',
  })
  createdAt?: Date;

  @ApiProperty({
    description: 'Timestamp of last post update',
    example: '2024-11-27T10:00:00.000Z',
  })
  updatedAt?: Date;
}
