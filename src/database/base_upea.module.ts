import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from 'src/v1/base_upea/area/entities/area.entity';
import { CarreraSede } from 'src/v1/base_upea/carrera-sede/entities/carrera-sede.entity';
import { Carrera } from 'src/v1/base_upea/carrera/entities/carrera.entity';
import { Gestion } from 'src/v1/base_upea/gestion/entities/gestion.entity';
import { Modalidad } from 'src/v1/base_upea/modalidad/entities/modalidad.entity';
import { Sede } from 'src/v1/base_upea/sede/entities/sede.entity';
import { VistaPersona } from 'src/v1/base_upea/vista_persona/entities/vista_persona.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.NEST_DB_BASE_UPEA_HOST,
      port: parseInt(process.env.NEST_DB_BASE_UPEA_PORT),
      username: process.env.NEST_DB_BASE_UPEA_USER,
      password: process.env.NEST_DB_BASE_UPEA_PASS,
      database: process.env.NEST_DB_BASE_UPEA_NAME,
      autoLoadEntities: false,
      synchronize: false,
      entities: [VistaPersona, Area, Carrera, Sede, CarreraSede, Gestion, Modalidad],
      name: 'base_upea'
    }),
  ],
})
export class BaseUpeaModule { }
