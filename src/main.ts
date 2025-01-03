import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AllExceptionsFilter } from '@/infra/error/http-exception.filter';
import { Swagger } from './config/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: { origin: '*' } });

  app.setGlobalPrefix('api/posts');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());

  new Swagger(new DocumentBuilder(), SwaggerModule).config(app);

  await app.listen(3000, () => console.log('API RUNNING ON PORT: ' + 3000));
}
bootstrap();
