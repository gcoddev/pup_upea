import { Injectable } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Departamento } from './entities/departamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento, 'tesoro')
    private readonly departamentoRepository: Repository<Departamento>
  ) { }

  findAll() {
    return this.departamentoRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} departamento`;
  }
}
