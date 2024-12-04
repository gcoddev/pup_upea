import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConvocatoriaModalidadService } from './convocatoria-modalidad.service';
import { CreateConvocatoriaModalidadDto } from './dto/create-convocatoria-modalidad.dto';
import { UpdateConvocatoriaModalidadDto } from './dto/update-convocatoria-modalidad.dto';

@Controller('convocatoria-modalidad')
export class ConvocatoriaModalidadController {
  constructor(private readonly convocatoriaModalidadService: ConvocatoriaModalidadService) {}

  @Post()
  create(@Body() createConvocatoriaModalidadDto: CreateConvocatoriaModalidadDto) {
    return this.convocatoriaModalidadService.create(createConvocatoriaModalidadDto);
  }

  @Get()
  findAll() {
    return this.convocatoriaModalidadService.findAll();
  }
}
