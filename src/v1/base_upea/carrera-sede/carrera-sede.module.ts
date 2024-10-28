import { Module } from '@nestjs/common';
import { CarreraSedeService } from './carrera-sede.service';
import { CarreraSedeController } from './carrera-sede.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreraSede } from './entities/carrera-sede.entity';
import { CarreraModule } from '../carrera/carrera.module';
import { SedeModule } from '../sede/sede.module';
import { AreaModule } from '../area/area.module';

@Module({
  controllers: [CarreraSedeController],
  providers: [CarreraSedeService],
  imports: [
    TypeOrmModule.forFeature([CarreraSede], 'base_upea'),
    CarreraModule,
    SedeModule,
    AreaModule
  ]
})
export class CarreraSedeModule { }
