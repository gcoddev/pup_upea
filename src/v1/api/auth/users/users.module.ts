import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PersonasModule } from '../../preuniversitario/personas/personas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CarreraModule } from 'src/v1/base_upea/carrera/carrera.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User]),
    PersonasModule,
    CarreraModule
  ],
  exports: [UsersService],
})
export class UsersModule { }
