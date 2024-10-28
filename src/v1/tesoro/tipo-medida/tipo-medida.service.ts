import { Injectable } from '@nestjs/common';
import { CreateTipoMedidaDto } from './dto/create-tipo-medida.dto';
import { UpdateTipoMedidaDto } from './dto/update-tipo-medida.dto';
import { TipoMedida } from './entities/tipo-medida.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoMedidaService {
  constructor(
    @InjectRepository(TipoMedida, 'tesoro')
    private readonly tipoMedidaRepository: Repository<TipoMedida>
  ) { }

  findAll() {
    return this.tipoMedidaRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoMedida`;
  }
}
