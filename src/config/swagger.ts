import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class Swagger {
  constructor(
    private builder: DocumentBuilder,
    private module: typeof SwaggerModule,
  ) {}

  config(app: INestApplication) {
    const config = this.builder
      .setTitle('Postory API')
      .setDescription('API for managing posts and content with ease.')
      .setVersion('1.0')
      .addTag('posts', 'Endpoints related to post management')
      .build();

    const document = this.module.createDocument(app, config);
    this.module.setup('/api/doc', app, document);
  }
}
