import { Controller, Get, Post, Body, Patch, Param, Delete, Version, BadRequestException, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from './users/dto/create-user.dto';
import { UsersService } from './users/users.service';
import { CreatePersonaDto } from '../personas/dto/create-persona.dto';
import { PersonasService } from '../personas/personas.service';
import { LoginDto } from './users/dto/login.dto';
import { Request } from 'express';
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role } from 'src/common/enums/role.enum';
import { UserRole } from 'src/common/enums/user-role.enum';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly personasService: PersonasService
  ) { }

  @Post('register')
  @Version('1')
  async create(@Body() createUserDto: CreateUserDto) {
    let errors = []
    const byCiPersona = await this.personasService.findByCi(createUserDto.numeroDocumento)
    const byEmailPersona = await this.personasService.findByEmail(createUserDto.email)
    if (byCiPersona) {
      errors.push({ field: 'numeroDocumento', message: 'Número de documento ya está registrado con una persona' })
    }
    if (byEmailPersona) {
      errors.push({ field: 'email', message: 'El email ya está registrado con una persona' })
    }

    if (errors.length > 0) {
      throw new BadRequestException({
        success: false,
        message: 'Error al validar la persona',
        errors
      });
    }

    const personaDto: CreatePersonaDto = {
      ci: createUserDto.numeroDocumento,
      expedido: createUserDto.expedido,
      nombres: createUserDto.nombres,
      paterno: createUserDto.paterno,
      materno: createUserDto.materno,
      email: createUserDto.email
    }

    const persona = await this.personasService.create(personaDto)

    errors = []

    const byCi = await this.usersService.findByCi(createUserDto.numeroDocumento)
    const byEmail = await this.usersService.findByEmail(createUserDto.email)
    const byUsername = await this.usersService.findByUsername(createUserDto.username)

    if (byCi) {
      errors.push({ field: 'numeroDocumento', message: 'Número de documento de usuario ya está registrado' })
    }
    if (byEmail) {
      errors.push({ field: 'email', message: 'Correo electrónico de usuario ya está registrado' })
    }
    if (byUsername) {
      errors.push({ field: 'username', message: 'Nombre de usuario de usuario ya está registrado' })
    }

    if (errors.length > 0) {
      throw new BadRequestException({
        success: false,
        message: 'Error al validar el usuario',
        errors: errors
      });
    }

    const user = await this.usersService.create(createUserDto, persona.idPersona)

    return {
      success: true,
      message: 'Usuario creado correctamente',
      usuario: {
        numeroDocumento: user.numeroDocumento,
        expedido: user.expedido,
        nombres: user.nombres,
        paterno: user.paterno,
        materno: user.materno,
        email: user.email,
        username: user.username,
        role: user.role,
        estado: user.estado
      }
    }
  }

  @Post('login')
  @Version('1')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @Get('profile')
  @Version('1')
  @Auth(Role.USER)
  getProfile(@Req() req: Request) {
    return this.usersService.getProfile(req)
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
