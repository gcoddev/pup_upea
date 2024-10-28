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

  @Get()
  findAll() {
    return this.ordenConceptoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordenConceptoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdenConceptoDto: UpdateOrdenConceptoDto) {
    return this.ordenConceptoService.update(+id, updateOrdenConceptoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordenConceptoService.remove(+id);
  }
}
