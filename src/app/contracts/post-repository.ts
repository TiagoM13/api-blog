import {
  CreatePostDto,
  Post,
  UpdatePostDto,
} from 'src/domain/entities/post.entity';

export interface PostRepository {
  findAll(): Promise<{ posts: Post[] }>;
  findById(id: string): Promise<Post | null>;
  create(data: CreatePostDto): Promise<{ post: Post }>;
  update(id: string, data: UpdatePostDto): Promise<{ post: Post }>;
  delete(id: string): Promise<Post>;
}

export const PostRepository = Symbol('PostRepository');
