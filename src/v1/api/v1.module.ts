import { Module } from '@nestjs/common';
import { V1Controller } from './v1.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './auth/users/users.module';
import { PersonasModule } from './preuniversitario/personas/personas.module';
import { OrdenConceptoModule } from './orden-concepto/orden-concepto.module';
import { OrdenModule } from './orden/orden.module';
import { PagoModule } from './pago/pago.module';
import { ConvocatoriaModule } from './preuniversitario/convocatoria/convocatoria.module';

@Module({
  imports: [AuthModule, UsersModule, PersonasModule, OrdenConceptoModule, OrdenModule, PagoModule, ConvocatoriaModule],
  controllers: [V1Controller]
})
export class V1Module {}
