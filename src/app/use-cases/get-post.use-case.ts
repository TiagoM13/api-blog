import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Post } from 'src/domain/entities/post.entity';
import { PostRepository } from '../contracts/post-repository';

@Injectable()
export class GetPostUseCase {
  constructor(
    @Inject(PostRepository) private readonly postRepository: PostRepository,
  ) {}

  async execute(id: string): Promise<{ post: Post }> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new NotFoundException('Post not found.');
    }

    return { post };
  }
}
