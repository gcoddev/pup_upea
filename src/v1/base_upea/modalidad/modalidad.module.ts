import { Module } from '@nestjs/common';
import { ModalidadService } from './modalidad.service';
import { ModalidadController } from './modalidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modalidad } from './entities/modalidad.entity';

@Module({
  controllers: [ModalidadController],
  providers: [ModalidadService],
  imports: [
    TypeOrmModule.forFeature([Modalidad], 'base_upea')
  ],
  exports: [ModalidadService]
})
export class ModalidadModule { }
