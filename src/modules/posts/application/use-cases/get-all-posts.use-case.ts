import { Injectable } from '@nestjs/common';
import { Post } from '../../domain/entities/post.entity';
import { PostRepository } from '../../domain/repositories/post.repository';

@Injectable()
export class GetAllPostsUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(): Promise<{ posts: Post[] }> {
    return this.postRepository.findAll();
  }
}
