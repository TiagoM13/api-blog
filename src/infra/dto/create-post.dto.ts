import {
  IsArray,
  IsDateString,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';
import { CreatePostDto } from 'src/domain/entities/post.entity';

export class CreatePostDtoInfra implements Omit<CreatePostDto, 'id'> {
  @IsString()
  @Length(5, 255)
  title: string;

  @IsString()
  content: string;

  @IsString()
  @Length(5, 255)
  author: string;

  @IsString()
  @IsUrl()
  thumbnail: string;

  @IsOptional()
  @IsString()
  @Length(5, 50)
  category?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsDateString()
  publishedAt?: Date;
}
