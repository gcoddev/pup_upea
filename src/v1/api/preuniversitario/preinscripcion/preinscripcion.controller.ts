import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Req } from '@nestjs/common';
import { PreinscripcionService } from './preinscripcion.service';
import { CreatePreinscripcionDto } from './dto/create-preinscripcion.dto';
import { UpdatePreinscripcionDto } from './dto/update-preinscripcion.dto';
import { Request } from 'express';
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role } from 'src/common/enums/auth/role.enum';

@Controller('preinscripcion')
export class PreinscripcionController {
  constructor(private readonly preinscripcionService: PreinscripcionService) { }

  @Post()
  create(@Body() createPreinscripcionDto: CreatePreinscripcionDto) {
    return this.preinscripcionService.create(createPreinscripcionDto);
  }

  @Get()
  @Version('1')
  findAll() {
    return this.preinscripcionService.findAll();
  }

  @Get('/carrera')
  @Version('1')
  @Auth(Role.TEC)
  findAllByCarrera(@Req() req: Request) {
    return this.preinscripcionService.findAllByCarreraTec(req);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.preinscripcionService.findOne(id);
  }

  @Get('persona/:idPersona')
  @Version('1')
  findByPersona(@Param('idPersona') idPersona: number) {
    return this.preinscripcionService.findByPersona(idPersona);
  }
}
