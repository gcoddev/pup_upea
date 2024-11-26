import { Injectable } from '@nestjs/common';
import { CreateConvocatoriaModalidadDto } from './dto/create-convocatoria-modalidad.dto';
import { UpdateConvocatoriaModalidadDto } from './dto/update-convocatoria-modalidad.dto';
import { Repository } from 'typeorm';
import { ConvocatoriaModalidad } from './entities/convocatoria-modalidad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Convocatoria } from '../convocatoria/entities/convocatoria.entity';
import { ModalidadService } from 'src/v1/base_upea/modalidad/modalidad.service';

@Injectable()
export class ConvocatoriaModalidadService {
  constructor(
    @InjectRepository(ConvocatoriaModalidad)
    private readonly convocatoriaModalidadRepository: Repository<ConvocatoriaModalidad>,
    private readonly modalidadService: ModalidadService
  ) { }

  create(createConvocatoriaModalidadDto: CreateConvocatoriaModalidadDto) {
    return this.convocatoriaModalidadRepository.save(createConvocatoriaModalidadDto)
  }

  findAll() {
    return `This action returns all convocatoriaModalidad`;
  }

  async findByConvocatoria(convocatoria: Convocatoria) {
    const modConvAll = await this.convocatoriaModalidadRepository.findBy({ convocatoria })
    const modalidades = []
    for (const modConv of modConvAll) {
      const modalidad = await this.modalidadService.findOne(modConv.id_modalidad)
      modalidades.push({
        ...modalidad
      })
    }
    return modalidades
  }

  findOne(id: number) {
    return `This action returns a #${id} convocatoriaModalidad`;
  }

  update(id: number, updateConvocatoriaModalidadDto: UpdateConvocatoriaModalidadDto) {
    return `This action updates a #${id} convocatoriaModalidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} convocatoriaModalidad`;
  }
}
