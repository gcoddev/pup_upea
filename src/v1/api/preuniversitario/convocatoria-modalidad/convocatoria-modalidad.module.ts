import { Module } from '@nestjs/common';
import { ConvocatoriaModalidadService } from './convocatoria-modalidad.service';
import { ConvocatoriaModalidadController } from './convocatoria-modalidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConvocatoriaModalidad } from './entities/convocatoria-modalidad.entity';
import { ModalidadModule } from 'src/v1/base_upea/modalidad/modalidad.module';

@Module({
  controllers: [ConvocatoriaModalidadController],
  providers: [ConvocatoriaModalidadService],
  imports: [
    TypeOrmModule.forFeature([ConvocatoriaModalidad]),
    ModalidadModule
  ],
  exports: [ConvocatoriaModalidadService]
})
export class ConvocatoriaModalidadModule { }
