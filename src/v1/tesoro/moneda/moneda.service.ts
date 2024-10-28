import { Injectable } from '@nestjs/common';
import { CreateMonedaDto } from './dto/create-moneda.dto';
import { UpdateMonedaDto } from './dto/update-moneda.dto';
import { Repository } from 'typeorm';
import { Moneda } from './entities/moneda.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MonedaService {
  constructor(
    @InjectRepository(Moneda, 'tesoro')
    private readonly monedaRepository: Repository<Moneda>
  ) { }

  findAll() {
    return this.monedaRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} moneda`;
  }
}
