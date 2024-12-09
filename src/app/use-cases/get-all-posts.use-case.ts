import { Inject, Injectable } from '@nestjs/common';
import { Post } from '@/domain/entities/post.entity';
import { PostRepository } from '../contracts/post-repository';

@Injectable()
export class GetAllPostsUseCase {
  constructor(
    @Inject(PostRepository) private readonly postRepository: PostRepository,
  ) {}

  async execute(): Promise<{ posts: Post[] }> {
    return this.postRepository.findAll();
  }
}
