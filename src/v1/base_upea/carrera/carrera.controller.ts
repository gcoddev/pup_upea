import { Controller, Get, Post, Body, Patch, Param, Delete, Version, UseGuards } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { ApiKeyGuard } from 'src/v1/api/auth/guard/api-key.guard';

@Controller('carrera')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) { }

  @Post()
  create(@Body() createCarreraDto: CreateCarreraDto) {
    return this.carreraService.create(createCarreraDto);
  }

  @Get()
  @Version('1')
  @UseGuards(ApiKeyGuard)
  findAll() {
    return this.carreraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.carreraService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCarreraDto: UpdateCarreraDto) {
    return this.carreraService.update(id, updateCarreraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.carreraService.remove(id);
  }
}
