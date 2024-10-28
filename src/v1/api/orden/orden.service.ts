import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Orden } from './entities/orden.entity';
import { Request } from 'express'
import { decrypt } from 'src/common/helpers/encryption.helper';
import { UsersService } from '../auth/users/users.service';

@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(Orden)
    private readonly ordenRepository: Repository<Orden>,
    private readonly usersService: UsersService,
  ) { }

  create(createOrdenDto: CreateOrdenDto) {
    return 'This action adds a new orden';
  }

  findAll() {
    return this.ordenRepository.find();
  }

  async findAllByUser(req: Request) {
    const iss = req['user'].iss
    const ci = decrypt(iss)
    const user = await this.usersService.findByCi(ci)
    const ordenes = this.ordenRepository.findBy({ idPersona: user.id_persona })

    return ordenes
  }

  findOne(id: number) {
    return `This action returns a #${id} orden`;
  }

  update(id: number, updateOrdenDto: UpdateOrdenDto) {
    return `This action updates a #${id} orden`;
  }

  remove(id: number) {
    return `This action removes a #${id} orden`;
  }
}
