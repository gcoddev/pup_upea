import { Module } from '@nestjs/common';
import { OrdenConceptoService } from './orden-concepto.service';
import { OrdenConceptoController } from './orden-concepto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenConcepto } from './entities/orden-concepto.entity';
import { ConceptoModule } from 'src/v1/tesoro/concepto/concepto.module';

@Module({
  controllers: [OrdenConceptoController],
  providers: [OrdenConceptoService],
  imports: [
    TypeOrmModule.forFeature([OrdenConcepto]),
    ConceptoModule
  ],
  exports: [OrdenConceptoService]
})
export class OrdenConceptoModule { }
