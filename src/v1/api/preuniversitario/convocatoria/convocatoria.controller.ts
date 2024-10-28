import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Req, Put, UseGuards } from '@nestjs/common';
import { ConvocatoriaService } from './convocatoria.service';
import { CreateConvocatoriaDto } from './dto/create-convocatoria.dto';
import { UpdateConvocatoriaDto } from './dto/update-convocatoria.dto';
import { Request } from 'express'
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role } from 'src/common/enums/auth/role.enum';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';

@Controller('convocatoria')
export class ConvocatoriaController {
  constructor(private readonly convocatoriaService: ConvocatoriaService) { }

  @Post()
  @Version('1')
  @Auth(Role.TEC)
  create(@Body() createConvocatoriaDto: CreateConvocatoriaDto, @Req() req: Request) {
    return this.convocatoriaService.create(createConvocatoriaDto, req);
  }

  @Get()
  @Version('1')
  @Auth(Role.TEC)
  findAll(@Req() req: Request) {
    return this.convocatoriaService.findAll(req);
  }

  @Get('pre')
  @Version('1')
  @UseGuards(ApiKeyGuard)
  findAllPre() {
    return this.convocatoriaService.findAllPre();
  }

  @Get(':id')
  @Version('1')
  findOne(@Param('id') id: number) {
    return this.convocatoriaService.findOne(id);
  }

  @Put(':id')
  @Version('1')
  @Auth(Role.TEC)
  update(@Param('id') id: number, @Body() createConvocatoriaDto: CreateConvocatoriaDto) {
    return this.convocatoriaService.update(id, createConvocatoriaDto);
  }

  @Patch(':id')
  @Version('1')
  @Auth(Role.TEC)
  updatePartial(@Param('id') id: number, @Body() updateConvocatoriaDto: UpdateConvocatoriaDto) {
    return this.convocatoriaService.updatePartial(id, updateConvocatoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.convocatoriaService.remove(id);
  }
}
