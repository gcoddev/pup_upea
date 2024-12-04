import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Not, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcryptjs from 'bcryptjs'
import { Request } from 'express'
import { decrypt } from 'src/common/helpers/encryption.helper';
import { Role } from 'src/common/enums/auth/role.enum';
import { EditUserDto } from './dto/edit-user.dto';
import { GoogleDto } from './dto/google.dto';
import { CarreraService } from 'src/v1/base_upea/carrera/carrera.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly carreraService: CarreraService
  ) { }

  async create(createUserDto: CreateUserDto) {
    let errors = []
    const byCi = await this.findByCi(createUserDto.numeroDocumento)
    const byEmail = await this.findByEmail(createUserDto.email)
    const byUsername = await this.findByUsername(createUserDto.username)
    const byPersona = await this.findByPersona(createUserDto.id_persona)

    if (byCi) {
      errors.push('Número de documento de usuario ya está registrado')
    }
    if (byEmail) {
      errors.push('Correo electrónico de usuario ya está registrado')
    }
    if (byUsername) {
      errors.push('Nombre de usuario de usuario ya está registrado')
    }
    if (byPersona) {
      errors.push('La persona ya tiene un usuario asociado')
    }

    if (errors.length > 0) {
      throw new BadRequestException({
        message: errors,
        error: 'Error al validar el usuario',
        statusCode: 400
      });
    }

    return this.usersRepository.save({
      ...createUserDto,
      password: await bcryptjs.hash(createUserDto.password, 10)
    })
  }

  findAll() {
    return this.usersRepository.find()
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id })
  }

  async findOneByEmailGoogle(googleDto: GoogleDto) {
    const user = await this.usersRepository.findOne({
      where: {
        email: googleDto.email,
        googleId: googleDto.googleId
      }
    })

    return user
  }

  async vinculateGoogle(idUser: number, user: any) {
    const userGoogle: GoogleDto = {
      googleId: user.googleId,
      email: user.email
    }

    const usuario = await this.usersRepository.findOneBy({ id: idUser, email: userGoogle.email })
    if (usuario) {
      const userUpdate = await this.usersRepository.update(usuario.id, {
        googleId: userGoogle.googleId
      })

      if (userUpdate.affected === 0) {
        return {
          success: false,
          vinculate: false,
          message: 'Error al vincular la cuenta.'
        }
      }

      return {
        success: true,
        vinculate: true,
        message: 'La cuenta ha sido vinculada con éxito, ya puede iniciar sesión con google desde esa cuenta.'
      }
    }

    return {
      success: false,
      vinculate: false,
      message: 'El correo electrónico actual no corresponde a la cuenta de google, modifique su correo primero.'
    }
  }

  async update(id: number, editUserDto: EditUserDto) {
    let errors = []
    const byCi = await this.findByCi(editUserDto.numeroDocumento, id)
    const byEmail = await this.findByEmail(editUserDto.email, id)
    const byUsername = await this.findByUsername(editUserDto.username, id)
    const byPersona = await this.findByPersona(editUserDto.id_persona, id)

    if (byCi) {
      errors.push('Número de documento de usuario ya está registrado')
    }
    if (byEmail) {
      errors.push('Correo electrónico de usuario ya está registrado')
    }
    if (byUsername) {
      errors.push('Nombre de usuario de usuario ya está registrado')
    }
    if (byPersona) {
      errors.push('La persona ya tiene un usuario asociado')
    }

    if (errors.length > 0) {
      throw new BadRequestException({
        message: errors,
        error: 'Error al validar el usuario',
        statusCode: 400
      });
    }

    const user = await this.usersRepository.update(id, editUserDto)
    if (user.affected === 0) {
      throw new Error(`Usuarios con id ${id} no existe`);
    }

    return {
      success: true,
      message: 'Usuario actualizado correctamente'
    }
  }

  async updatePartial(id: number, updateUserDto: UpdateUserDto) {
    let user: any;
    if (updateUserDto.password) {
      user = await this.usersRepository.update(id, {
        ...updateUserDto,
        password: await bcryptjs.hash(updateUserDto.password, 10)
      })
    } else {
      if (updateUserDto.email) {
        const mail = await this.usersRepository.findOneBy({ email: updateUserDto.email })
        if (mail) {
          throw new BadRequestException({
            success: false,
            message: ['El correo electrónico ya se encuentra registrado con otro usuario'],
            error: 'Bad request'
          })
        }
        user = await this.usersRepository.update(id, updateUserDto)
      } else {
        user = await this.usersRepository.update(id, updateUserDto)
      }
    }

    if (user.affected === 0) {
      return {
        success: false,
        message: `Usuarios con id ${id} no existe`
      }
    }

    return {
      success: true,
      message: 'Usuario actualizado correctamente'
    }
  }

  remove(id: number) {
    return this.usersRepository.softDelete(id);
  }

  findByCi(ci: string, id: number = null) {
    if (id != null) {
      return this.usersRepository.findOne({
        where: [
          {
            numeroDocumento: ci,
            id: Not(id)
          }
        ]
      })
    }

    return this.usersRepository.findOneBy({ numeroDocumento: ci });
  }

  async findByEmail(email: string, id: number = null) {
    if (id) {
      const user = await this.usersRepository.findOne({
        where: [
          {
            email,
            id: Not(id)
          },
        ],
      });

      return user
    }
    return await this.usersRepository.findOneBy({ email });
  }

  findByUsername(username: string, id: number = null) {
    if (id) {
      return this.usersRepository.findOne({
        where: [
          {
            username,
            id: Not(id)
          }
        ]
      });
    }
    return this.usersRepository.findOneBy({ username });
  }

  findByPersona(id_persona: number, id: number = null) {
    if (id) {
      return this.usersRepository.findOne({
        where: [
          {
            id_persona,
            id: Not(id)
          }
        ]
      });
    }
    return this.usersRepository.findOneBy({ id_persona });
  }

  findWithPassword(emailOrUsername: string) {
    return this.usersRepository.createQueryBuilder('user')
      .where('BINARY user.email = :emailOrUsername', { emailOrUsername })
      .orWhere('BINARY user.username = :emailOrUsername', { emailOrUsername })
      // .andWhere('user.estado = :estado', { estado: Estado.ACTIVO })
      .select([
        'user.nombres', 'user.numeroDocumento', 'user.username', 'user.email', 'user.role', 'user.password', 'user.estado', 'user.id_carrera'
      ])
      .getOne();
  }

  async getProfile(req: Request) {
    const payload = req['user']
    const iss = payload['iss']

    const user = await this.usersRepository.findOneBy({ numeroDocumento: decrypt(iss) })
    if (user.id_carrera) {
      const carrera = await this.carreraService.findOne(user.id_carrera)

      return {
        ...user,
        carrera
      }
    }

    return user
  }
}
