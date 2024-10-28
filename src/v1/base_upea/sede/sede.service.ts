import { Injectable } from '@nestjs/common';
import { CreateSedeDto } from './dto/create-sede.dto';
import { UpdateSedeDto } from './dto/update-sede.dto';
import { Repository } from 'typeorm';
import { Sede } from './entities/sede.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SedeService {
  constructor(
    @InjectRepository(Sede, 'base_upea')
    private readonly sedeRepository: Repository<Sede>
  ) { }

  create(createSedeDto: CreateSedeDto) {
    return 'This action adds a new sede';
  }

  findAll() {
    return this.sedeRepository.find()
  }

  findOne(id: number) {
    return this.sedeRepository.findOneBy({ id })
  }

  update(id: number, updateSedeDto: UpdateSedeDto) {
    return `This action updates a #${id} sede`;
  }

  remove(id: number) {
    return `This action removes a #${id} sede`;
  }
}
