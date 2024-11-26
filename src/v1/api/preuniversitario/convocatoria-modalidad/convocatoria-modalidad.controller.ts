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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.convocatoriaModalidadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConvocatoriaModalidadDto: UpdateConvocatoriaModalidadDto) {
    return this.convocatoriaModalidadService.update(+id, updateConvocatoriaModalidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.convocatoriaModalidadService.remove(+id);
  }
}
