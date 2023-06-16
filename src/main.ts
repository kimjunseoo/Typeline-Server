import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CORS_ENABLE_URL,
    maxAge: 86400
  });
  const config = new DocumentBuilder()
    .setTitle('Typeline')
    .setDescription('Description of Typeline Server API')
    .setVersion('1.0')
    .addTag('User API')
    .addTag('Schedule API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
