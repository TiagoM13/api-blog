import { Injectable, NotFoundException } from "@nestjs/common";
import { Post } from "./interfaces/posts.interface";
import { PostsRepository } from "./repositories/posts.repository";

@Injectable()
export class PostsService {
    constructor(private readonly repository: PostsRepository) { }

    async getPosts(): Promise<{ posts: Post[] }> {
        const posts = await this.repository.findAll()
        return { posts }
    }

    async getPost(id: number): Promise<{ post: Post | null }> {
        const post = await this.repository.findById(id)

        if (!post) {
            throw new NotFoundException(`Post with ID ${id} not found`)
        }

        return { post }
    }

    async createPost(data: Omit<Post, 'id' | 'created_at' | 'updated_at'>): Promise<Post> {
        return await this.repository.create(data)
    }

    async updatePost(id: number, data: Post): Promise<Post> {
        const post = await this.repository.findById(id)

        if (!post) {
            throw new NotFoundException(`Post with ID ${id} not found`)
        }

        return this.repository.update(id, data)
    }

    async deletePost(id: number): Promise<{ message: string }> {
        const post = await this.repository.findById(id)

        if (!post) {
            throw new NotFoundException(`Post with ID ${id} not found`)
        }

        await this.repository.delete(id)

        return { message: 'Post deleted successfully' };
    }
}