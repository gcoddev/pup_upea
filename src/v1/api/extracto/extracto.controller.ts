import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExtractoService } from './extracto.service';
import { CreateExtractoDto } from './dto/create-extracto.dto';
import { UpdateExtractoDto } from './dto/update-extracto.dto';

@Controller('extracto')
export class ExtractoController {
  constructor(private readonly extractoService: ExtractoService) {}

  @Post()
  create(@Body() createExtractoDto: CreateExtractoDto) {
    return this.extractoService.create(createExtractoDto);
  }

  @Get()
  findAll() {
    return this.extractoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.extractoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExtractoDto: UpdateExtractoDto) {
    return this.extractoService.update(+id, updateExtractoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.extractoService.remove(+id);
  }
}
