import { Module } from '@nestjs/common';
import { VistaPersonaService } from './vista_persona.service';
import { VistaPersonaController } from './vista_persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VistaPersona } from './entities/vista_persona.entity';

@Module({
  controllers: [VistaPersonaController],
  providers: [VistaPersonaService],
  imports: [
    TypeOrmModule.forFeature([VistaPersona], 'base_upea')
  ],
  exports: [VistaPersonaService]
})
export class VistaPersonaModule { }
