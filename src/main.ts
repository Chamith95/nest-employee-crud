import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  // Swagger
  const options = new DocumentBuilder()
    .setTitle('API Document')
    .setDescription('APIs')
    .setVersion('1.0')
    .addBearerAuth({ in: 'header', type: 'http' })
    .build();
  SwaggerModule.setup(
    'employees/swagger',
    app,
    SwaggerModule.createDocument(app, options),
    {
      swaggerOptions: {
        docExpansion: 'none',
      },
    },
  );



  await app.listen(3005);
}
bootstrap();
