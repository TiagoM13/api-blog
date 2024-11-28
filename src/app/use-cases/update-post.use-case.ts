import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Post, UpdatePostDto } from 'src/domain/entities/post.entity';
import { PostRepository } from '../contracts/post-repository';

@Injectable()
export class UpdatePostUseCase {
  constructor(
    @Inject(PostRepository) private readonly postRepository: PostRepository,
  ) {}

  async execute(id: string, dto: UpdatePostDto): Promise<{ post: Post }> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new NotFoundException('Post not found.');
    }

    return await this.postRepository.update(id, dto);
  }
}
