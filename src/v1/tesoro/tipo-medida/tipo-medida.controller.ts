import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { TipoMedidaService } from './tipo-medida.service';
import { CreateTipoMedidaDto } from './dto/create-tipo-medida.dto';
import { UpdateTipoMedidaDto } from './dto/update-tipo-medida.dto';

@Controller('tipo-medida')
export class TipoMedidaController {
  constructor(private readonly tipoMedidaService: TipoMedidaService) {}

  @Get()
  @Version('1')
  findAll() {
    return this.tipoMedidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoMedidaService.findOne(+id);
  }
}
