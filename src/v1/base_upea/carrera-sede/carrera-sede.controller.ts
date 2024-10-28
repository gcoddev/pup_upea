import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { CarreraSedeService } from './carrera-sede.service';
import { CreateCarreraSedeDto } from './dto/create-carrera-sede.dto';
import { UpdateCarreraSedeDto } from './dto/update-carrera-sede.dto';
import { Role } from 'src/common/enums/auth/role.enum';
import { Auth } from 'src/common/decorators/auth.decorator';

@Controller('carrera-sede')
export class CarreraSedeController {
  constructor(private readonly carreraSedeService: CarreraSedeService) { }

  @Post()
  create(@Body() createCarreraSedeDto: CreateCarreraSedeDto) {
    return this.carreraSedeService.create(createCarreraSedeDto);
  }

  @Get()
  @Version('1')
  @Auth(Role.ADMIN)
  findAll() {
    return this.carreraSedeService.findAll();
  }

  @Get(':id')
  @Version('1')
  findOneByCarr(@Param('id') id: number) {
    return this.carreraSedeService.findOneByCarr(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.carreraSedeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCarreraSedeDto: UpdateCarreraSedeDto) {
    return this.carreraSedeService.update(id, updateCarreraSedeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.carreraSedeService.remove(id);
  }
}
