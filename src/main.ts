import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // app
  const app = await NestFactory.create(AppModule);

  // cors
  app.enableCors();

  // swagger
  const options = new DocumentBuilder()
    .setTitle('Swagger example')
    .setDescription('The swagger API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // listen on env port or 3000
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
