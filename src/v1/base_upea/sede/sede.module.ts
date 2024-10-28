import { Module } from '@nestjs/common';
import { SedeService } from './sede.service';
import { SedeController } from './sede.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sede } from './entities/sede.entity';

@Module({
  controllers: [SedeController],
  providers: [SedeService],
  imports: [
    TypeOrmModule.forFeature([Sede], 'base_upea')
  ],
  exports: [SedeService]
})
export class SedeModule { }
