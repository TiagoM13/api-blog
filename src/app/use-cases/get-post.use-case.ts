import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Post } from 'src/domain/entities/post.entity';
import { PostRepository } from '../contracts/post-repository';
import { POST_NOT_FOUND } from '../error/messages';

@Injectable()
export class GetPostUseCase {
  constructor(
    @Inject(PostRepository) private readonly postRepository: PostRepository,
  ) { }

  async execute(id: string): Promise<{ post: Post }> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new NotFoundException(POST_NOT_FOUND);
    }

    return { post };
  }
}
