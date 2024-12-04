import { Injectable } from '@nestjs/common';
import { CreateTipoConceptoDto } from './dto/create-tipo-concepto.dto';
import { UpdateTipoConceptoDto } from './dto/update-tipo-concepto.dto';
import { Repository } from 'typeorm';
import { TipoConcepto } from './entities/tipo-concepto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ConceptoService } from '../concepto/concepto.service';
import { UnidadMovimientoService } from '../unidad-movimiento/unidad-movimiento.service';

@Injectable()
export class TipoConceptoService {
  constructor(
    @InjectRepository(TipoConcepto, 'tesoro')
    private readonly tipoConceptoRepository: Repository<TipoConcepto>,
    private readonly conceptoService: ConceptoService,
    private readonly unidadMovimientoService: UnidadMovimientoService
  ) { }

  async findAll() {
    const tipos = await this.tipoConceptoRepository.find()
    const tiposConcepto = []

    for (const element of tipos) {
      const conceptosAll = await this.conceptoService.findAllByOne(element.id);
      const conceptos = []
      for (const concepto of conceptosAll) {
        // const unidad = await this.unidadMovimientoService.findOne(concepto.unidadMovimiento_id)

        conceptos.push({
          ...concepto,
          // unidad
        })
      }
      tiposConcepto.push({
        ...element,
        conceptos
      });
    }

    return tiposConcepto
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoConcepto`;
  }
}
