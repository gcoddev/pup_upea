import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path'
import * as express from 'express'
import { RequestMethod, ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ruta base del proyecto NuxtJs FrontEnd
  app.use(express.static(join(__dirname, '..', 'public/dist')))

  // Ruta base para archivos subidos
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  // Prefijo 'api' para rutas de BackEnd NestJS
  app.setGlobalPrefix('api', {
    // exclude: [
    //   {
    //     path: '/:codigoSeguimiento',
    //     method: RequestMethod.POST
    //   },
    // ],
  });

  // Habilitar el versionado del servicio
  app.enableVersioning({
    type: VersioningType.URI
  })

  app.useGlobalFilters()

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'OPTIONS'],
    credentials: true,
    // allowedHeaders: [
    //   'Authorization',
    //   'Content-Type',
    //   'Origin',
    //   'Accept',
    //   'X-Requested-With',
    //   'Access-Control-Allow-Origin',
    // ],
  });

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
