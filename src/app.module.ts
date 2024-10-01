import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './v1/api/v1.module';
import { ConfigModule } from '@nestjs/config';
import { BaseUpeaModule } from './database/base_upea.module';
import { DbModule } from './database/db.module';
import { TesoroModule } from './database/tesoro.module';

@Module({
  imports: [
    // Configuracion de .env
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),

    // Bases de datos
    DbModule, // Base de datos 'PUP'
    TesoroModule, // Base de datos 'Tesoro'
    BaseUpeaModule, // Base de tatos 'Base UPEA'

    // Módulos de versión
    V1Module, // api/v1
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
