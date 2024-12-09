import { Injectable } from '@nestjs/common';
import { PostRepository } from '@/app/contracts/post-repository';
import {
  CreatePostDto,
  Post,
  UpdatePostDto,
} from '@/domain/entities/post.entity';
import { PrismaService } from '@/infra/services/prisma/prisma.service';

@Injectable()
export class PostRepositoryPrisma implements PostRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<{ posts: Post[] }> {
    const posts = await this.prisma.post.findMany();
    return { posts };
  }

  async findById(id: string): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({
      where: { id: id },
    });
    return post;
  }

  async create(data: CreatePostDto): Promise<{ post: Post }> {
    const post = await this.prisma.post.create({ data });

    return { post };
  }

  async update(id: string, data: UpdatePostDto): Promise<{ post: Post }> {
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
