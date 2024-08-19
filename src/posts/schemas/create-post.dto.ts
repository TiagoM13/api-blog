import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().optional(),
  author: z.string().min(1, 'Author is required'),
})

export type CreatePostDto = z.infer<typeof createPostSchema>;