import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '@prisma/client';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDTO } from './dto/update-post.dto';
import { PostRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postRepository: PostRepository) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.findAll();
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.postRepository.findById(id);

    if (!post) {
      throw new NotFoundException('Post not found.');
    }

    return post;
  }

  async create(createPostDto: CreatePostDTO): Promise<Post> {
    return this.postRepository.create(createPostDto);
  }

  async update(id: string, updatePostDto: UpdatePostDTO): Promise<Post> {
    await this.findOne(id);
    return this.postRepository.update(id, updatePostDto);
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.postRepository.delete(id);
  }
}
