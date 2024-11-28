export interface CreatePostDto {
  id?: string;
  title: string;
  content: string;
  thumbnail: string;
  author: string;
  category?: string;
  tags?: string[];
  isPublished?: boolean;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UpdatePostDto extends Partial<CreatePostDto> {}

export class Post {
  id?: string;
  title: string;
  content: string;
  thumbnail: string;
  author: string;
  category?: string;
  tags?: string[];
  isPublished?: boolean;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(dto: CreatePostDto) {
    this.id = dto.id;
    this.title = dto.title;
    this.content = dto.content;
    this.thumbnail = dto.thumbnail;
    this.author = dto.author;
    this.category = dto.category;
    this.tags = dto.tags;
    this.isPublished = dto.isPublished;
    this.publishedAt = dto.publishedAt;
    this.createdAt = dto.createdAt;
    this.updatedAt = dto.updatedAt;
  }

  static create(dto: Omit<CreatePostDto, 'id'>) {
    return new Post({ ...dto });
  }
}
