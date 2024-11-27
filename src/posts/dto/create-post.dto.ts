import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreatePostDTO {
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
  @IsBoolean()
  isPublished?: boolean;

  @IsOptional()
  @IsDateString()
  publishedAt?: string;
}
