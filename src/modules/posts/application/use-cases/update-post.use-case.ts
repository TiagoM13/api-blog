import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '../../domain/entities/post.entity';
import { PostRepository } from '../../domain/repositories/post.repository';
import { UpdatePostDTO } from '../dto/update-post.dto';

@Injectable()
export class UpdatePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(
    id: string,
    updatePostDto: UpdatePostDTO,
  ): Promise<{ post: Post }> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new NotFoundException('Post not found.');
    }

    return await this.postRepository.update(id, updatePostDto);
  }
}
