import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDTO } from '../dto/create-post.dto';
import { UpdatePostDTO } from '../dto/update-post.dto';

@Injectable()
export class PostRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<{ posts: Post[] }> {
    const posts = await this.prisma.post.findMany();
    return { posts };
  }

  async findById(id: string): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({
      where: { id },
    });
    return post;
  }

  async create(data: CreatePostDTO): Promise<{ post: Post }> {
    const post = await this.prisma.post.create({ data });

    return { post };
  }

  async update(id: string, data: UpdatePostDTO): Promise<{ post: Post }> {
    const post = await this.prisma.post.update({
      where: { id },
      data,
    });

    return { post };
  }

  async delete(id: string): Promise<Post> {
    return await this.prisma.post.delete({
      where: { id },
    });
  }
}
