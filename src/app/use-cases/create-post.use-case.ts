import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto, Post } from 'src/domain/entities/post.entity';
import { PostRepository } from '../contracts/post-repository';

@Injectable()
export class CreatePostUseCase {
  constructor(
    @Inject(PostRepository) private readonly postRepository: PostRepository,
  ) {}

  async execute(dto: CreatePostDto): Promise<{ post: Post }> {
    const post = Post.create(dto);

    return await this.postRepository.create(post);
  }
}
