import {
  Post,
  Body,
  Get,
  Controller,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreatePostDTO } from '../../application/dto/create-post.dto';
import { UpdatePostDTO } from '../../application/dto/update-post.dto';
import { CreatePostUseCase } from '../../application/use-cases/create-post.use-case';
import { GetAllPostsUseCase } from '../../application/use-cases/get-all-posts.use-case';
import { GetPostUseCase } from '../../application/use-cases/get-post.use-case';
import { UpdatePostUseCase } from '../../application/use-cases/update-post.use-case';
import { DeletePostUseCase } from '../../application/use-cases/delete-post.use-case';

@Controller('posts')
export class PostController {
  constructor(
    private readonly getAllPostsUseCase: GetAllPostsUseCase,
    private readonly getPostUseCase: GetPostUseCase,
    private readonly createPostUseCase: CreatePostUseCase,
    private readonly updatePostUseCase: UpdatePostUseCase,
    private readonly deletePostUseCase: DeletePostUseCase,
  ) {}

  @Get()
  async findAll() {
    return this.getAllPostsUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.getPostUseCase.execute(id);
  }

  @Post()
  async create(@Body() createPostDTO: CreatePostDTO) {
    return this.createPostUseCase.execute(createPostDTO);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePostDTO: UpdatePostDTO) {
    return this.updatePostUseCase.execute(id, updatePostDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.deletePostUseCase.execute(id);
  }
}
