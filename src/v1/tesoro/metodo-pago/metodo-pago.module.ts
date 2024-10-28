import { Module } from '@nestjs/common';
import { MetodoPagoService } from './metodo-pago.service';
import { MetodoPagoController } from './metodo-pago.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPago } from './entities/metodo-pago.entity';

@Module({
  controllers: [MetodoPagoController],
  providers: [MetodoPagoService],
  imports: [TypeOrmModule.forFeature([MetodoPago], 'tesoro')]
})
export class MetodoPagoModule { }
