import { Module } from '@nestjs/common';
import { PpeController } from './ppe.controller';
import { PpeService } from './ppe.service';
import { OrdenModule } from 'src/v1/api/orden/orden.module';
import { MailModule } from 'src/v1/api/mail/mail.module';
import { UsersModule } from 'src/v1/api/auth/users/users.module';
import { PersonasModule } from 'src/v1/api/preuniversitario/personas/personas.module';

@Module({
  controllers: [PpeController],
  providers: [PpeService],
  imports: [OrdenModule, MailModule, UsersModule, PersonasModule]
})
export class PpeModule { }
