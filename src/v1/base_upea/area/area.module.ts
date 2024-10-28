import { forwardRef, Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { CarreraModule } from '../carrera/carrera.module';

@Module({
  controllers: [AreaController],
  providers: [AreaService],
  imports: [
    TypeOrmModule.forFeature([Area], 'base_upea'),
    forwardRef(() => CarreraModule)
  ],
  exports: [AreaService]
})
export class AreaModule { }
