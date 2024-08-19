import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Post } from "../interfaces/posts.interface";

@Injectable()
export class PostsRepository {
    constructor(private prisma: PrismaService) {}
    
    async findAll(): Promise<Post[]> {
        return await this.prisma.post.findMany()
    }

    async findById(id: number): Promise<Post | null> {
        return await this.prisma.post.findUnique({
            where: { id }
        })
    }

    async create(data: Omit<Post, 'id' | 'created_at' | 'updated_at'>): Promise<Post> {
        return await this.prisma.post.create({ data })
    }

    async update(id: number, data: Post): Promise<Post> {
        return await this.prisma.post.update({
            where: { id },
            data
        })
    }

    async delete(id: number): Promise<Post> {
        return await this.prisma.post.delete({
            where: { id }
        })
    }
}