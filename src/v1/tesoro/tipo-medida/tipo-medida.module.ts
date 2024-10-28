import { Module } from '@nestjs/common';
import { TipoMedidaService } from './tipo-medida.service';
import { TipoMedidaController } from './tipo-medida.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoMedida } from './entities/tipo-medida.entity';
import { UnidadMovimientoModule } from '../unidad-movimiento/unidad-movimiento.module';

@Module({
  controllers: [TipoMedidaController],
  providers: [TipoMedidaService],
  imports: [
    TypeOrmModule.forFeature([TipoMedida], 'tesoro')
  ]
})
export class TipoMedidaModule { }
