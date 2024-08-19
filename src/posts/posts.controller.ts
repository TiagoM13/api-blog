import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { Post as IPost } from "./interfaces/posts.interface";
import { createPostSchema, CreatePostDto } from "./schemas/create-post.dto";

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()
    async getPosts(): Promise<{ posts: IPost[] }> {
        const { posts } = await this.postsService.getPosts()
        return { posts }
    }

    @Get(':id')
    async getPost(@Param('id') id: string): Promise<{ post: IPost } | null> {
        const post = await this.postsService.getPost(Number(id))
        return post;
    }

    @Post()
    async createPost(@Body() data: IPost): Promise<{ post: IPost }> {
        const parsedBody = createPostSchema.safeParse(data)

        if (!parsedBody.success) {
            throw new BadRequestException(parsedBody.error.errors)
        }

        const postData: CreatePostDto = parsedBody.data;

        const post = await this.postsService.createPost(postData as Omit<IPost, 'id' | 'created_at' | 'updated_at'>)

        return { post }
    }

    @Put(':id')
    async updatePost(@Param('id') id: string, @Body() data: IPost): Promise<{ post: IPost }> {
        const post = await this.postsService.updatePost(Number(id), data)

        return { post }
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string): Promise<{ message: string }> {
        return await this.postsService.deletePost(Number(id))
    }
}