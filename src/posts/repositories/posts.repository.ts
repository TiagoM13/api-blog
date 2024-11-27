import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDTO } from '../dto/create-post.dto';
import { UpdatePostDTO } from '../dto/update-post.dto';

@Injectable()
export class PostRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Post[]> {
    return await this.prisma.post.findMany();
  }

  async findById(id: string): Promise<Post | null> {
    return await this.prisma.post.findUnique({
      where: { id },
    });
  }

  async create(data: CreatePostDTO): Promise<Post> {
    return await this.prisma.post.create({ data });
  }

  async update(id: string, data: UpdatePostDTO): Promise<Post> {
    return await this.prisma.post.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Post> {
    return await this.prisma.post.delete({
      where: { id },
    });
  }
}
