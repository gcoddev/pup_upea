import { Controller, Get, Post, Body, Patch, Param, Delete, Version, UseGuards } from '@nestjs/common';
import { VistaPersonaService } from './vista_persona.service';
import { ApiKeyGuard } from 'src/v1/api/auth/guard/api-key.guard';
import { Expedido } from 'src/common/enums/expedido.enum';

@Controller('vista-persona')
export class VistaPersonaController {
  constructor(private readonly vistaPersonaService: VistaPersonaService) { }

  @Get()
  findAll() {
    return this.vistaPersonaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.vistaPersonaService.findOne(id);
  }

  @Get(':ci/:exp/:fn')
  @Version('1')
  @UseGuards(ApiKeyGuard)
  findPersona(@Param('ci') ci: string, @Param('exp') exp: Expedido, @Param('fn') fecha_nac: Date) {
    return this.vistaPersonaService.findPersona(ci, exp, fecha_nac);
  }
}
