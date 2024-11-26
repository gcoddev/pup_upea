import { Injectable } from '@nestjs/common';
import { CreateExtractoDto } from './dto/create-extracto.dto';
import { UpdateExtractoDto } from './dto/update-extracto.dto';

@Injectable()
export class ExtractoService {
  create(createExtractoDto: CreateExtractoDto) {
    return 'This action adds a new extracto';
  }

  findAll() {
    return `This action returns all extracto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} extracto`;
  }

  update(id: number, updateExtractoDto: UpdateExtractoDto) {
    return `This action updates a #${id} extracto`;
  }

  remove(id: number) {
    return `This action removes a #${id} extracto`;
  }
}
