import { forwardRef, Module } from '@nestjs/common';
import { PreinscripcionService } from './preinscripcion.service';
import { PreinscripcionController } from './preinscripcion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Preinscripcion } from './entities/preinscripcion.entity';
import { PersonasModule } from '../personas/personas.module';
import { OrdenModule } from '../../orden/orden.module';
import { ConvocatoriaModule } from '../convocatoria/convocatoria.module';
import { CarreraModule } from 'src/v1/base_upea/carrera/carrera.module';

@Module({
  controllers: [PreinscripcionController],
  providers: [PreinscripcionService],
  imports: [
    TypeOrmModule.forFeature([Preinscripcion]),
    PersonasModule, CarreraModule
  ],
  exports: [PreinscripcionService]
})
export class PreinscripcionModule { }