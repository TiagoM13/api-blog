import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '@prisma/client';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDTO } from './dto/update-post.dto';
import { PostRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postRepository: PostRepository) {}

  async findAll(): Promise<{ posts: Post[] }> {
    return this.postRepository.findAll();
  }

  async findById(id: string): Promise<{ post: Post }> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new NotFoundException('Post not found.');
    }

    return { post };
  }

  async create(createPostDto: CreatePostDTO): Promise<{ post: Post }> {
    const post = this.postRepository.create(createPostDto);
    return post;
  }

  async update(
    id: string,
    updatePostDto: UpdatePostDTO,
  ): Promise<{ post: Post }> {
    await this.findById(id);
    const post = await this.postRepository.update(id, updatePostDto);
    return post;
  }

  async remove(id: string) {
    await this.findById(id);

    await this.postRepository.delete(id);
  }
}
