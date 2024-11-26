import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateConvocatoriaDto } from './dto/create-convocatoria.dto';
import { UpdateConvocatoriaDto } from './dto/update-convocatoria.dto';
import { Repository } from 'typeorm';
import { Convocatoria } from './entities/convocatoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express'
import { Role } from 'src/common/enums/auth/role.enum';
import { CarreraService } from 'src/v1/base_upea/carrera/carrera.service';
import { SedeService } from 'src/v1/base_upea/sede/sede.service';
import { GestionService } from 'src/v1/base_upea/gestion/gestion.service';
import { Carrera } from 'src/v1/base_upea/carrera/entities/carrera.entity';
import { UsersService } from '../../auth/users/users.service';
import { decrypt } from 'src/common/helpers/encryption.helper';
import { ModalidadService } from 'src/v1/base_upea/modalidad/modalidad.service';
import { ConvocatoriaModalidadService } from '../convocatoria-modalidad/convocatoria-modalidad.service';

@Injectable()
export class ConvocatoriaService {
  constructor(
    @InjectRepository(Convocatoria)
    private readonly convocatoriaService: Repository<Convocatoria>,
    private readonly carreraService: CarreraService,
    private readonly sedeService: SedeService,
    private readonly gestionService: GestionService,
    private readonly modalidadService: ModalidadService,
    private readonly userService: UsersService,
    private readonly convocatoriaModalidadService: ConvocatoriaModalidadService
  ) { }

  async create(createConvocatoriaDto: CreateConvocatoriaDto, filePath: string, req: Request) {
    const ci = req['user']
    const user = await this.userService.findByCi(decrypt(ci['iss']))

    const convocatoria = await this.convocatoriaService.save({
      ...createConvocatoriaDto,
      file: filePath,
      id_usuario: user.id,
      id_concepto: 1
    })

    for (const cm of createConvocatoriaDto.modalidad) {
      this.convocatoriaModalidadService.create({
        ...cm,
        convocatoria: convocatoria
      })
    }

    return {
      success: true,
      message: 'Convocatoria creada correctamente',
      convocatoria
    }
  }

  async findAll(req: Request) {
    const user = req['user']['sub']
    let convocatoriaAll
    const convocatorias = []

    if (user.role === Role.ADMIN) {
      convocatoriaAll = await this.convocatoriaService.find({
        order: {
          idConvocatoria: 'DESC'
        },
      })
    } else {
      convocatoriaAll = await this.convocatoriaService.find({
        order: {
          idConvocatoria: 'DESC'
        },
        where: {
          id_carrera: user.id_carrera
        }
      })
    }

    for (const conv of convocatoriaAll) {
      const carrera = await this.carreraService.findOne(conv.id_carrera)
      const sede = await this.sedeService.findOne(conv.id_sede)
      const gestion = await this.gestionService.findOne(conv.id_gestion)
      const modalidad = await this.convocatoriaModalidadService.findByConvocatoria(conv)

      convocatorias.push({
        ...conv,
        carrera,
        sede,
        gestion,
        modalidad
      })
    }

    return convocatorias
  }

  async findAllPre() {
    const convAll = await this.convocatoriaService.find({
      order: {
        idConvocatoria: 'DESC'
      },
    })
    const convocatorias = []

    for (const conv of convAll) {
      const carrera = await this.carreraService.findOne(conv.id_carrera)
      const sede = await this.sedeService.findOne(conv.id_sede)
      const gestion = await this.gestionService.findOne(conv.id_gestion)
      const modalidad = await this.convocatoriaModalidadService.findByConvocatoria(conv)

      convocatorias.push({
        ...conv,
        carrera,
        sede,
        gestion,
        modalidad
      })
    }

    return convocatorias
  }

  findAllByUser(id_usuario) {
    return this.convocatoriaService.findBy({ id_usuario })
  }

  findOne(id: number) {
    return this.convocatoriaService.findOneBy({ idConvocatoria: id })
  }

  async update(id: number, createConvocatoriaDto: CreateConvocatoriaDto) {
    const convocatoria = await this.convocatoriaService.update(id, createConvocatoriaDto)

    if (convocatoria.affected === 0) {
      return new BadRequestException({
        success: false,
        message: 'Convocatoría no encontrada',
      })
    }

    return {
      success: true,
      message: 'Convocatoría actualizada correctamente',
    }
  }

  async updatePartial(id: number, updateConvocatoriaDto: UpdateConvocatoriaDto) {
    const convocatoria = await this.convocatoriaService.update(id, updateConvocatoriaDto)

    if (convocatoria.affected === 0) {
      return new BadRequestException({
        success: false,
        message: 'Convocatoría no encontrada',
      })
    }

    return {
      success: true,
      message: 'Convocatoría actualizada correctamente',
    }
  }

  remove(id: number) {
    return `This action removes a #${id} convocatoria`;
  }
}
