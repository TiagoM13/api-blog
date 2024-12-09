import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Post } from '@/domain/entities/post.entity';
import { PostRepository } from '../contracts/post-repository';
import { POST_ALREADY_PUBLISHED, POST_NOT_FOUND } from '../error/messages';

@Injectable()
export class UpdateIsPublishedUseCase {
  constructor(
    @Inject(PostRepository) private readonly postRepository: PostRepository,
  ) {}

  async execute(id: string): Promise<{ post: Post }> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new BadRequestException(POST_NOT_FOUND);
    }

    if (post.isPublished) {
      throw new BadRequestException(POST_ALREADY_PUBLISHED);
    }

    post.isPublished = true;
    post.publishedAt = new Date();

    return await this.postRepository.update(id, {
      isPublished: post.isPublished,
      publishedAt: post.publishedAt,
    });
  }
}
