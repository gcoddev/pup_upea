import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MetodoPago } from './entities/metodo-pago.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetodoPagoService {
  constructor(
    @InjectRepository(MetodoPago, 'tesoro')
    private readonly metodoPagoRepository: Repository<MetodoPago>
  ) { }

  findAll() {
    return this.metodoPagoRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} metodoPago`;
  }
}
