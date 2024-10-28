import { Injectable } from '@nestjs/common';
import { CreateModalidadDto } from './dto/create-modalidad.dto';
import { UpdateModalidadDto } from './dto/update-modalidad.dto';
import { Repository } from 'typeorm';
import { Modalidad } from './entities/modalidad.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ModalidadService {
  constructor(
    @InjectRepository(Modalidad, 'base_upea')
    private readonly modalidadRepository: Repository<Modalidad>
  ) { }

  create(createModalidadDto: CreateModalidadDto) {
    return 'This action adds a new modalidad';
  }

  findAll() {
    return this.modalidadRepository.find()
  }

  findOne(id: number) {
    return this.modalidadRepository.findOneBy({ id })
  }

  update(id: number, updateModalidadDto: UpdateModalidadDto) {
    return `This action updates a #${id} modalidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} modalidad`;
  }
}
