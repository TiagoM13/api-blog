import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdatePostUseCase } from 'src/app/use-cases/update-post.use-case';
import { UpdatePostDtoInfra } from '../dto/update-post.dto';

@Controller()
export class UpdatePostController {
  constructor(private readonly useCase: UpdatePostUseCase) {}

  @Put(':id')
  async handle(@Param('id') id: string, @Body() dto: UpdatePostDtoInfra) {
    return this.useCase.execute(id, dto);
  }
}
