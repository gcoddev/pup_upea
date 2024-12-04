import { Controller, Get, Post, Body, Patch, Param, Delete, Version, BadRequestException, Req, UseGuards, Res, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from './users/dto/create-user.dto';
import { UsersService } from './users/users.service';
import { CreatePersonaDto } from '../preuniversitario/personas/dto/create-persona.dto';
import { PersonasService } from '../preuniversitario/personas/personas.service';
import { LoginDto } from './users/dto/login.dto';
import { Request, Response } from 'express';
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role } from 'src/common/enums/auth/role.enum';
import { UserRole } from 'src/common/enums/auth/user-role.enum';
import { User } from './users/entities/user.entity';
import { AuthPersonaDto } from 'src/v1/base_upea/vista_persona/dto/auth-persona.dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserDto } from './users/dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly personasService: PersonasService
  ) { }

  @Get('redirect')
  @Version('1')
  @UseGuards(AuthGuard('google'))
  async googleAuth() { }


  @Get('callback')
  @Version('1')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req: any, @Res() res: Response) {
    const data = req.user

    if (data.op == '1') {
      const user = await this.authService.loginGoogle(data)
      return res.redirect(`${process.env.URL_FRONT_DEV}/login?success=${user.success}&login=${user.login}&message=${user.message}&accessToken=${user.token}`);
    } else if (data.op == '2') {
      const user = await this.authService.vinculateGoogle(data.idUser, data)
      return res.redirect(`${process.env.URL_FRONT_DEV}/admin/security?success=${user.success}&vinculate=${user.vinculate}&message=${user.message}`);
    }
    // else {
    //   throw new BadRequestException({
    //     message: 'Opción de login o registro no válida',
    //     error: 'Error al validar la opción de login o registro',
    //     statusCode: 400
    //   });
    // }
  }


  @Post('register')
  @Version('1')
  async create(@Body() createUserDto: CreateUserDto) {
    let errors = []

    // if (createUserDto.id_persona === 0) {
    //   // Persona no existe en base_upea
    //   const byCiPersona = await this.personasService.findByCi(createUserDto.numeroDocumento)
    //   const byEmailPersona = await this.personasService.findByEmail(createUserDto.email)
    //   if (byCiPersona) {
    //     errors.push('Número de documento ya está registrado con una persona')
    //   }
    //   if (byEmailPersona) {
    //     errors.push('El email ya está registrado con una persona')
    //   }

    //   if (errors.length > 0) {
    //     throw new BadRequestException({
    //       message: errors,
    //       error: 'Error al validar la persona',
    //       statusCode: 400
    //     });
    //   }

    //   const personaDto: CreatePersonaDto = {
    //     ci: createUserDto.numeroDocumento,
    //     expedido: createUserDto.expedido,
    //     nombres: createUserDto.nombres,
    //     paterno: createUserDto.paterno,
    //     materno: createUserDto.materno,
    //     fecha_nac: createUserDto.fecha_nac,
    //     email: createUserDto.email
    //   }

    //   errors = []
    //   const byCi = await this.usersService.findByCi(createUserDto.numeroDocumento)
    //   const byEmail = await this.usersService.findByEmail(createUserDto.email)
    //   const byUsername = await this.usersService.findByUsername(createUserDto.username)

    //   if (byCi) {
    //     errors.push('Número de documento de usuario ya está registrado')
    //   }
    //   if (byEmail) {
    //     errors.push('Correo electrónico de usuario ya está registrado')
    //   }
    //   if (byUsername) {
    //     errors.push('Nombre de usuario de usuario ya está registrado')
    //   }

    //   if (errors.length > 0) {
    //     throw new BadRequestException({
    //       message: errors,
    //       error: 'Error al validar el usuario',
    //       statusCode: 400
    //     });
    //   }

    //   persona = await this.personasService.create(personaDto)
    //   user = await this.usersService.create(createUserDto, persona.idPersona)
    // } else {
    // Persona existe en base_upea
    // errors = []
    // const byCi = await this.usersService.findByCi(createUserDto.numeroDocumento)
    // const byEmail = await this.usersService.findByEmail(createUserDto.email)
    // const byUsername = await this.usersService.findByUsername(createUserDto.username)
    // const byPersona = await this.usersService.findByPersona(createUserDto.id_persona)

    // if (byCi) {
    //   errors.push('Número de documento de usuario ya está registrado')
    // }
    // if (byEmail) {
    //   errors.push('Correo electrónico de usuario ya está registrado')
    // }
    // if (byUsername) {
    //   errors.push('Nombre de usuario de usuario ya está registrado')
    // }
    // if (byPersona) {
    //   errors.push('La persona ya tiene un usuario asociado')
    // }

    // if (errors.length > 0) {
    //   throw new BadRequestException({
    //     message: errors,
    //     error: 'Error al validar el usuario',
    //     statusCode: 400
    //   });
    // }

    const user = await this.usersService.create(createUserDto)
    // }

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
  @Auth(Role.GUEST)
  getProfile(@Req() req: Request) {
    return this.usersService.getProfile(req)
  }

  @Post('signup')
  @Version('1')
  findOneByNameCi(@Body() persona: AuthPersonaDto) {
    return this.authService.findOneByNameCi(persona);
  }
}
