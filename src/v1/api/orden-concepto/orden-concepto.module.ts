import { Module } from '@nestjs/common';
import { OrdenConceptoService } from './orden-concepto.service';
import { OrdenConceptoController } from './orden-concepto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenConcepto } from './entities/orden-concepto.entity';

@Module({
  controllers: [OrdenConceptoController],
  providers: [OrdenConceptoService],
  imports: [
    TypeOrmModule.forFeature([OrdenConcepto])
  ]
})
export class OrdenConceptoModule { }
