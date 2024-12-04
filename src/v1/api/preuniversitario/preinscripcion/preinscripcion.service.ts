import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreatePreinscripcionDto } from './dto/create-preinscripcion.dto';
import { UpdatePreinscripcionDto } from './dto/update-preinscripcion.dto';
import { Repository } from 'typeorm';
import { Preinscripcion } from './entities/preinscripcion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonasService } from '../personas/personas.service';
import { Persona } from '../personas/entities/persona.entity';
import { OrdenService } from '../../orden/orden.service';
import { Orden } from '../../orden/entities/orden.entity';
import { ConvocatoriaService } from '../convocatoria/convocatoria.service';
import { CarreraService } from 'src/v1/base_upea/carrera/carrera.service';
import { Request } from 'express';

@Injectable()
export class PreinscripcionService {
  constructor(
    @InjectRepository(Preinscripcion)
    private readonly preinscripcionRepository: Repository<Preinscripcion>,
    private readonly personaService: PersonasService,
    private readonly carreraService: CarreraService
  ) { }

  create(createPreinscripcionDto: CreatePreinscripcionDto) {
    return this.preinscripcionRepository.save(createPreinscripcionDto)
  }

  async findAll() {
    const pre = await this.preinscripcionRepository.find()
    const pres = []

    for (const element of pre) {
      const carrera = await this.carreraService.findOne(element.convocatoria.id_carrera)

      pres.push({
        ...element,
        convocatoria: {
          ...element.convocatoria,
          carrera
        }
      })
    };

    return pres
  }

  async findAllByCarrera(id_carrera: number) {
    const pre = await this.preinscripcionRepository.find()
    const pres = []

    for (const element of pre) {
      if (element.convocatoria.id_carrera === id_carrera) {
        const carrera = await this.carreraService.findOne(element.convocatoria.id_carrera)

        pres.push({
          ...element,
          convocatoria: {
            ...element.convocatoria,
            carrera
          }
        })
      }
    };

    return pres
  }

  async findAllByCarreraTec(req: Request) {
    const payload = req['user']
    const pre = await this.preinscripcionRepository.find()
    const pres = []

    for (const element of pre) {
      if (element.convocatoria.id_carrera === payload['sub']['id_carrera']) {
        const carrera = await this.carreraService.findOne(element.convocatoria.id_carrera)

        pres.push({
          ...element,
          convocatoria: {
            ...element.convocatoria,
            carrera
          }
        })
      }
    };

    return pres
  }

  findOne(id: number) {
    return this.preinscripcionRepository.findOneBy({ idPreinscripcion: id })
  }

  async findByPersona(idPersona: number) {
    const persona: Persona = await this.personaService.findOne(idPersona)
    return this.preinscripcionRepository.findOne({
      where: {
        persona
      },
      order: {
        idPreinscripcion: 'DESC'
      }
    })
  }

  async findByOrden(orden: Orden) {
    const preins = await this.preinscripcionRepository.findOneBy({ orden })
    if (preins) {
      const carrera = await this.carreraService.findOne(preins.convocatoria.id_carrera)

      return {
        ...preins,
        convocatoria: {
          ...preins.convocatoria,
          carrera
        }
      }
    }
    return null
  }
}
