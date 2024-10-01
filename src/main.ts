import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path'
import * as express from 'express'
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ruta base del proyecto NuxtJs FrontEnd
  app.use(express.static(join(__dirname, '..', 'public/dist')))

  // Prefijo 'api' para rutas de BackEnd NestJS
  app.setGlobalPrefix('api')

  // Habilitar el versionado del servicio
  app.enableVersioning({
    type: VersioningType.URI
  })

  app.useGlobalFilters()

  // Validar los DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      disableErrorMessages: false
    })
  )

  await app.listen(3000);
}
bootstrap();
