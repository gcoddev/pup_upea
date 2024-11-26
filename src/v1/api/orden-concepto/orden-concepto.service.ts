import { Injectable } from '@nestjs/common';
import { CreateOrdenConceptoDto } from './dto/create-orden-concepto.dto';
import { UpdateOrdenConceptoDto } from './dto/update-orden-concepto.dto';
import { Repository } from 'typeorm';
import { OrdenConcepto } from './entities/orden-concepto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Orden } from '../orden/entities/orden.entity';
import { ConceptoService } from 'src/v1/tesoro/concepto/concepto.service';

@Injectable()
export class OrdenConceptoService {
  constructor(
    @InjectRepository(OrdenConcepto)
    private readonly ordenConceptoRepository: Repository<OrdenConcepto>,
    private readonly conceptoService: ConceptoService
  ) { }

  create(createOrdenConceptoDto: CreateOrdenConceptoDto) {
    return this.ordenConceptoRepository.save(createOrdenConceptoDto)
  }

  async findAllWithConceptos(orden: Orden) {
    const ordenConceptoAll = await this.ordenConceptoRepository.findBy({ orden })
    const ordenConcepto = []

    for (const oc of ordenConceptoAll) {
      const concepto = await this.conceptoService.findOne(oc.id_concepto)

      ordenConcepto.push({
        ...oc,
        concepto
      })
    }

    return ordenConcepto
  }

  async findAllConceptos(orden: Orden) {
    console.log(orden)

    return 0
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
