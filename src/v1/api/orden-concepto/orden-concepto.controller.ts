import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdenConceptoService } from './orden-concepto.service';
import { CreateOrdenConceptoDto } from './dto/create-orden-concepto.dto';
import { UpdateOrdenConceptoDto } from './dto/update-orden-concepto.dto';

@Controller('orden-concepto')
export class OrdenConceptoController {
  constructor(private readonly ordenConceptoService: OrdenConceptoService) {}

  @Post()
  create(@Body() createOrdenConceptoDto: CreateOrdenConceptoDto) {
    return this.ordenConceptoService.create(createOrdenConceptoDto);
  }
}
