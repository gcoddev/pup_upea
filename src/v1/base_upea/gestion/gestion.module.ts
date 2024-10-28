import { Module } from '@nestjs/common';
import { GestionService } from './gestion.service';
import { GestionController } from './gestion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gestion } from './entities/gestion.entity';

@Module({
  controllers: [GestionController],
  providers: [GestionService],
  imports: [
    TypeOrmModule.forFeature([Gestion], 'base_upea')
  ],
  exports: [GestionService]
})
export class GestionModule { }
