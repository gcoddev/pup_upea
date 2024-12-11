import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';

dotenvExpand.expand(dotenv.config())

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path'
import * as express from 'express'
import { RequestMethod, ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PpeModule } from './ppe/ppe.module';
import { UsersModule } from './v1/api/auth/users/users.module';

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

  const config = new DocumentBuilder()
    .setTitle('Servicio API "Plataforma Universitaria de Pagos"')
    .setDescription('Documentación de la API del sistema de integración de la Pasarela de Pagos del Estado de AGETIC')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: [
      AppModule, PpeModule, UsersModule
    ]
  });
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
