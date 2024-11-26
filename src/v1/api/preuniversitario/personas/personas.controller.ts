import { Controller, Get, Post, Body, Patch, Param, Delete, Version, UseGuards } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';
import { Expedido } from 'src/common/enums/expedido.enum';

@Controller('persona')
export class PersonasController {
  constructor(
    private readonly personasService: PersonasService
  ) { }

  @Post()
  @Version('1')
  create(@Body() createPersonaDto: CreatePersonaDto) {
    return this.personasService.create(createPersonaDto);
  }

  @Get()
  @Version('1')
  findAll() {
    return this.personasService.findAll();
  }

  @Get(':ci/:expedido/:fecha_nac')
  @Version('1')
  @UseGuards(ApiKeyGuard)
  findOneByCi(@Param('ci') ci: string, @Param('expedido') expedido: Expedido, @Param('fecha_nac') fecha_nac: Date) {
    return this.personasService.findOneByCI(ci, expedido, fecha_nac);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.personasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.personasService.update(id, updatePersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personasService.remove(id);
  }
}
