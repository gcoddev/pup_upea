import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Req, UseGuards } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { Request } from 'express'
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role } from 'src/common/enums/auth/role.enum';
import { ApiKeyGuard } from 'src/v1/api/auth/guard/api-key.guard';

@Controller('orden')
export class OrdenController {
  constructor(
    private readonly ordenService: OrdenService,
  ) { }

  @Post()
  @Version('1')
  // @Auth(Role.GUEST)
  @UseGuards(ApiKeyGuard)
  create(@Body() createOrdenDto: CreateOrdenDto, @Req() req: Request) {
    return this.ordenService.create(createOrdenDto, req);
  }

  // @Get()
  // @Version('1')
  // @Auth(Role.GUEST)
  // findAllByUser(@Req() req: Request) {
  //   if (req['user']['sub'].role === Role.ADMIN) {
  //     return this.ordenService.findAll();
  //   } else {
  //     return this.ordenService.findAllByUser(req);
  //   }
  // }

  @Get()
  @Version('1')
  @Auth(Role.GUEST)
  findAllByUser(@Req() req: Request) {
    return this.ordenService.findAllByUser(req);
  }

  @Get('all')
  @Version('1')
  @Auth(Role.GUEST)
  findAll() {
    return this.ordenService.findAll();
  }

  @Get('codigo/:codigo')
  @Version('1')
  @UseGuards(ApiKeyGuard)
  findOneByCodigo(@Param('codigo') codigo: string) {
    return this.ordenService.findCodigoSeguimiento(codigo);
  }

  @Get(':id')
  @Version('1')
  findOne(@Param('id') id: number) {
    return this.ordenService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdenDto: UpdateOrdenDto) {
    return this.ordenService.update(+id, updateOrdenDto);
  }
}
