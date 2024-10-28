import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/common/constants/jwt.constants';
import { PersonasModule } from '../preuniversitario/personas/personas.module';
import { VistaPersonaModule } from 'src/v1/base_upea/vista_persona/vista_persona.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2h' },
    }),
    UsersModule,
    PersonasModule,
    VistaPersonaModule
  ],
  exports: [AuthService]
})
export class AuthModule { }
