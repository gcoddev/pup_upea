import { Module } from '@nestjs/common';
import { V1Controller } from './v1.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './auth/users/users.module';
import { PersonasModule } from './preuniversitario/personas/personas.module';
import { OrdenConceptoModule } from './orden-concepto/orden-concepto.module';
import { OrdenModule } from './orden/orden.module';
import { ConvocatoriaModule } from './preuniversitario/convocatoria/convocatoria.module';
import { ConvocatoriaModalidadModule } from './preuniversitario/convocatoria-modalidad/convocatoria-modalidad.module';
import { PreinscripcionModule } from './preuniversitario/preinscripcion/preinscripcion.module';
import { ExtractoModule } from './extracto/extracto.module';
import { MailModule } from './mail/mail.module';
import { PpeModule } from 'src/ppe/ppe.module';

@Module({
  imports: [AuthModule, UsersModule, PersonasModule, OrdenConceptoModule, OrdenModule, ConvocatoriaModule, ConvocatoriaModalidadModule, PreinscripcionModule, ExtractoModule, MailModule],
  controllers: [V1Controller]
})
export class V1Module { }
