import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { CreatePostDto } from '@/domain/entities/post.entity';

export class CreatePostDtoInfra implements Omit<CreatePostDto, 'id'> {
  @ApiProperty({
    description: 'The title of the post, between 5 and 255 characters.',
    example: 'Introduction to NestJS with Prisma',
  })
  @IsString()
  @Length(5, 255)
  title: string;

  @ApiProperty({
    description: 'The content of the post.',
    example:
      'NestJS is a powerful framework for building scalable applications...',
  })
  @IsString()
  content: string;

  @ApiProperty({
    description: 'The author of the post, between 5 and 255 characters.',
    example: 'John Doe',
  })
  @IsString()
  @Length(5, 255)
  author: string;

  @ApiProperty({
    description: 'URL to the thumbnail image of the post.',
    example: 'https://example.com/thumbnail.jpg',
  })
  @IsString()
  @IsUrl()
  thumbnail: string;

  @ApiProperty({
    description:
      'The category of the post, optional and between 5 and 50 characters.',
    example: 'Web Development',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Length(5, 50)
  category?: string;

  @ApiProperty({
    description:
      'A list of tags related to the post. Each tag is a string, optional.',
    example: ['nestjs', 'prisma', 'backend'],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiProperty({
    description:
      'The published date of the post, optional and should be a valid ISO string.',
    example: '2024-11-27T10:00:00.000Z',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  publishedAt?: Date;
}
