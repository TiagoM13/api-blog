import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDtoInfra } from './create-post.dto';

export class UpdatePostDtoInfra extends PartialType(CreatePostDtoInfra) {}
