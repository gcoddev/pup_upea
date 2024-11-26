import { forwardRef, Module } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { OrdenController } from './orden.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './entities/orden.entity';
import { UsersModule } from '../auth/users/users.module';
import { OrdenConceptoModule } from '../orden-concepto/orden-concepto.module';
import { PersonasModule } from '../preuniversitario/personas/personas.module';
import { ConvocatoriaModule } from '../preuniversitario/convocatoria/convocatoria.module';
import { PreinscripcionModule } from '../preuniversitario/preinscripcion/preinscripcion.module';
import { MonedaModule } from 'src/v1/tesoro/moneda/moneda.module';
import { ComprobanteController } from './comprobante.controller';
import { ComprobanteService } from './comprobante.service';
import { HttpModule } from '@nestjs/axios';
import { ConceptoModule } from 'src/v1/tesoro/concepto/concepto.module';

@Module({
  controllers: [OrdenController, ComprobanteController],
  providers: [OrdenService, ComprobanteService],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([Orden]),
    UsersModule,
    OrdenConceptoModule,
    PersonasModule,
    ConvocatoriaModule,
    PreinscripcionModule,
    MonedaModule,
    ConceptoModule
  ],
  exports: [OrdenService]
})
export class OrdenModule { }
