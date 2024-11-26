import { Module } from '@nestjs/common';
import { ExtractoService } from './extracto.service';
import { ExtractoController } from './extracto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Extracto } from './entities/extracto.entity';

@Module({
  controllers: [ExtractoController],
  providers: [ExtractoService],
  imports: [
    TypeOrmModule.forFeature([Extracto])
  ]
})
export class ExtractoModule { }
