import { forwardRef, Module } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CarreraController } from './carrera.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrera } from './entities/carrera.entity';
import { AreaModule } from '../area/area.module';

@Module({
  controllers: [CarreraController],
  providers: [CarreraService],
  imports: [
    TypeOrmModule.forFeature([Carrera], 'base_upea'),
    forwardRef(() => AreaModule),
  ],
  exports: [
    CarreraService
  ]
})
export class CarreraModule { }
