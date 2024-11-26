import { Module } from '@nestjs/common';
import { ConvocatoriaService } from './convocatoria.service';
import { ConvocatoriaController } from './convocatoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Convocatoria } from './entities/convocatoria.entity';
import { CarreraModule } from 'src/v1/base_upea/carrera/carrera.module';
import { SedeModule } from 'src/v1/base_upea/sede/sede.module';
import { GestionModule } from 'src/v1/base_upea/gestion/gestion.module';
import { UsersModule } from '../../auth/users/users.module';
import { ModalidadModule } from 'src/v1/base_upea/modalidad/modalidad.module';
import { ConvocatoriaModalidadModule } from '../convocatoria-modalidad/convocatoria-modalidad.module';

@Module({
  controllers: [ConvocatoriaController],
  providers: [ConvocatoriaService],
  imports: [
    TypeOrmModule.forFeature([Convocatoria]),
    CarreraModule, SedeModule, GestionModule, ModalidadModule,
    UsersModule, ConvocatoriaModalidadModule
  ],
  exports: [ConvocatoriaService]
})
export class ConvocatoriaModule { }
