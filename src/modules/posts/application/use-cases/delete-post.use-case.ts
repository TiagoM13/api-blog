import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '../../domain/entities/post.entity';
import { PostRepository } from '../../domain/repositories/post.repository';

@Injectable()
export class DeletePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(id: string): Promise<Post> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new NotFoundException('Post not found.');
    }

    return await this.postRepository.delete(id);
  }
}