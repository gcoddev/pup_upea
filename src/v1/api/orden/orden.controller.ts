import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Req } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { Request } from 'express'
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role } from 'src/common/enums/auth/role.enum';
import { UserRole } from 'src/common/enums/auth/user-role.enum';
import { UsersService } from '../auth/users/users.service';

@Controller('orden')
export class OrdenController {
  constructor(
    private readonly ordenService: OrdenService
  ) { }

  @Post()
  create(@Body() createOrdenDto: CreateOrdenDto) {
    return this.ordenService.create(createOrdenDto);
  }

  @Get()
  @Version('1')
  @Auth(Role.GUEST)
  findAllByUser(@Req() req: Request) {
    if (req['user'].sub.role === Role.ADMIN) {
      return this.ordenService.findAll();
    } else {
      return this.ordenService.findAllByUser(req);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdenDto: UpdateOrdenDto) {
    return this.ordenService.update(+id, updateOrdenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordenService.remove(+id);
  }
}
