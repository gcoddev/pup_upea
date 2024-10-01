import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcryptjs from 'bcryptjs'
import { Request } from 'express'
import { decrypt } from 'src/common/helpers/encryption.helper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto, idPersona: number = null) {
    return this.usersRepository.save({
      ...createUserDto,
      password: await bcryptjs.hash(createUserDto.password, 10),
      idPersona: idPersona
    })
  }

  findAll() {
    return this.usersRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findByCi(ci: string) {
    return this.usersRepository.findOneBy({ numeroDocumento: ci });
  }

  findByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }

  findByUsername(username: string) {
    return this.usersRepository.findOneBy({ username });
  }

  findWithPassword(emailOrUsername: string) {
    return this.usersRepository.createQueryBuilder('user')
      .where('BINARY user.email = :emailOrUsername', { emailOrUsername })
      .orWhere('BINARY user.username = :emailOrUsername', { emailOrUsername })
      // .andWhere('user.estado = :estado', { estado: Estado.ACTIVO })
      .select([
        'user.nombres', 'user.numeroDocumento', 'user.username', 'user.email', 'user.role', 'user.password', 'user.estado'
      ])
      .getOne();
  }

  getProfile(req: Request) {
    const payload = req['user']
    const iss = payload.iss

    return this.usersRepository.findOneBy({ numeroDocumento: decrypt(iss) })
  }
}
