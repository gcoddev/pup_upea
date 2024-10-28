import { Injectable } from '@nestjs/common';
import { CreateOrdenConceptoDto } from './dto/create-orden-concepto.dto';
import { UpdateOrdenConceptoDto } from './dto/update-orden-concepto.dto';

@Injectable()
export class OrdenConceptoService {
  create(createOrdenConceptoDto: CreateOrdenConceptoDto) {
    return 'This action adds a new ordenConcepto';
  }

  findAll() {
    return `This action returns all ordenConcepto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordenConcepto`;
  }

  update(id: number, updateOrdenConceptoDto: UpdateOrdenConceptoDto) {
    return `This action updates a #${id} ordenConcepto`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordenConcepto`;
  }
}
