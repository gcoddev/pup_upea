import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Module } from './v1/api/v1.module';
import { ConfigModule } from '@nestjs/config';
import { BaseUpeaModule } from './database/base_upea.module';
import { DbModule } from './database/db.module';
import { TesoroModule } from './database/tesoro.module';
import { VistaPersonaModule } from './v1/base_upea/vista_persona/vista_persona.module';
import { ConceptoModule } from './v1/tesoro/concepto/concepto.module';
import { UnidadMovimientoModule } from './v1/tesoro/unidad-movimiento/unidad-movimiento.module';
import { TipoMedidaModule } from './v1/tesoro/tipo-medida/tipo-medida.module';
import { MetodoPagoModule } from './v1/tesoro/metodo-pago/metodo-pago.module';
import { MonedaModule } from './v1/tesoro/moneda/moneda.module';
import { DepartamentoModule } from './v1/tesoro/departamento/departamento.module';
import { AreaModule } from './v1/base_upea/area/area.module';
import { CarreraModule } from './v1/base_upea/carrera/carrera.module';
import { ModalidadModule } from './v1/base_upea/modalidad/modalidad.module';
import { SedeModule } from './v1/base_upea/sede/sede.module';
import { TipoConceptoModule } from './v1/tesoro/tipo-concepto/tipo-concepto.module';
import { CarreraSedeModule } from './v1/base_upea/carrera-sede/carrera-sede.module';
import { GestionModule } from './v1/base_upea/gestion/gestion.module';

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
    V1Module, VistaPersonaModule, ConceptoModule, UnidadMovimientoModule, TipoMedidaModule, MetodoPagoModule, MonedaModule, DepartamentoModule, AreaModule, CarreraModule, ModalidadModule, SedeModule, TipoConceptoModule, CarreraSedeModule, GestionModule, // api/v1
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
