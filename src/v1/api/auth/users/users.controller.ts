import { Controller, Get, Post, Body, Patch, Param, Delete, Version, UseGuards, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role } from 'src/common/enums/auth/role.enum';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';
import { EditUserDto } from './dto/edit-user.dto';

@Controller('usuario')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @Auth(Role.ADMIN)
  @Version('1')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Auth(Role.ADMIN)
  @Version('1')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Version('1')
  @UseGuards(ApiKeyGuard)
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @Version('1')
  @Auth(Role.ADMIN)
  update(@Param('id') id: number, @Body() editUserDto: EditUserDto) {
    return this.usersService.update(id, editUserDto);
  }

  @Patch(':id')
  @Version('1')
  @Auth(Role.ADMIN)
  updatePartial(@Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto) {
    return this.usersService.updatePartial(id, UpdateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
