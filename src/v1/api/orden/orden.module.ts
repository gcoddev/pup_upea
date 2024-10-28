import { Module } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { OrdenController } from './orden.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './entities/orden.entity';
import { UsersModule } from '../auth/users/users.module';

@Module({
  controllers: [OrdenController],
  providers: [OrdenService],
  imports: [
    TypeOrmModule.forFeature([Orden]),
    UsersModule
  ]
})
export class OrdenModule { }
