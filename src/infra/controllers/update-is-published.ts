import { Controller, Param, Patch } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateIsPublishedUseCase } from '@/app/use-cases/update-is-published.use-case';

@ApiTags('posts')
@Controller()
export class UpdateIsPublishedController {
  constructor(private readonly useCase: UpdateIsPublishedUseCase) {}

  @Patch(':id/publish')
  @ApiOperation({
    summary: 'Publish a post',
    description: 'Marks a post as published and updates the published date.',
  })
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
    description: 'The unique post identifier.',
  })
  @ApiResponse({
    status: 200,
    description: 'The post was successfully published.',
  })
  @ApiResponse({
    status: 400,
    description:
      'Invalid operation, e.g., attempting to unpublish an already published post.',
  })
  async handle(@Param('id') id: string): Promise<void> {
    await this.useCase.execute(id);
  }
}
