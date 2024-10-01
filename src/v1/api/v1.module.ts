import { Module } from '@nestjs/common';
import { V1Controller } from './v1.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './auth/users/users.module';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [AuthModule, UsersModule, PersonasModule],
  controllers: [V1Controller]
})
export class V1Module {}
