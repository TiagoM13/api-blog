import { Injectable } from '@nestjs/common';
import { Post } from '../../domain/entities/post.entity';
import { PostRepository } from '../../domain/repositories/post.repository';
import { CreatePostDTO } from '../dto/create-post.dto';

@Injectable()
export class CreatePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(createPostDto: CreatePostDTO): Promise<{ post: Post }> {
    return await this.postRepository.create(createPostDto);
  }
}
