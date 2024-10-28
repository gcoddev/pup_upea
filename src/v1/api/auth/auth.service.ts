import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs'
import { LoginDto } from './users/dto/login.dto';
import { UsersService } from './users/users.service';
import { Estado } from 'src/common/enums/estado.enum';
import { encrypt } from 'src/common/helpers/encryption.helper'
import { UserRole } from 'src/common/enums/auth/user-role.enum';
import { Role } from 'src/common/enums/auth/role.enum';
import { VistaPersonaService } from 'src/v1/base_upea/vista_persona/vista_persona.service';
import { AuthPersonaDto } from 'src/v1/base_upea/vista_persona/dto/auth-persona.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly vistaPersonaService: VistaPersonaService
  ) { }

  async login(loginDto: LoginDto) {
    const isEmail = loginDto.emailOrUsername.includes('@')
    let user

    if (isEmail) {
      user = await this.usersService.findWithPassword(loginDto.emailOrUsername)

      if (!user) {
        throw new BadRequestException({
          success: false,
          message: 'El email no existe'
        })
      }
    } else {
      user = await this.usersService.findWithPassword(loginDto.emailOrUsername)

      if (!user) {
        throw new BadRequestException({
          success: false,
          message: 'El nombre de usuario no existe'
        })
      }
    }

    if (user.estado === Estado.INACTIVO) {
      throw new BadRequestException({
        success: false,
        message: 'Usuario inactivo'
      })
    }

    const isPasswordValid = await bcryptjs.compare(loginDto.password, user.password)
    if (!isPasswordValid) {
      throw new BadRequestException({
        success: false,
        message: 'Contraseña incorrecta'
      })
    }

    let roles = []
    if (user.role === Role.USER) {
      // Aquí se valida si el USUARIO tiene sub rol de Estudiante, Docente o Administrativo
      //
      roles = [
        UserRole.ESTUDIANTE,
        UserRole.DOCENTE
      ]
    }

    const data = {
      name: user.nombres,
      email: user.email,
      username: user.username,
      id_carrera: user.id_carrera ? user.id_carrera : 0,
      role: user.role,
      roles
    }

    const payload = {
      iss: encrypt(user.numeroDocumento),
      sub: {
        ...data
      }
    }
    const token = await this.jwtService.signAsync(payload)
    return {
      success: true,
      message: 'Autenticación exitosa',
      data,
      token
    }
  }

  async findOneByNameCi(auth: AuthPersonaDto) {
    const user = await this.vistaPersonaService.findOneByCi(auth)

    return user
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
