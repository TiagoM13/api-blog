export class Post {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  author: string;
  category: string;
  tags: string[];
  isPublished: boolean;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
