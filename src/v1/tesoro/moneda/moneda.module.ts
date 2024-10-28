import { Module } from '@nestjs/common';
import { MonedaService } from './moneda.service';
import { MonedaController } from './moneda.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moneda } from './entities/moneda.entity';

@Module({
  controllers: [MonedaController],
  providers: [MonedaService],
  imports: [TypeOrmModule.forFeature([Moneda], 'tesoro')],
})
export class MonedaModule { }
