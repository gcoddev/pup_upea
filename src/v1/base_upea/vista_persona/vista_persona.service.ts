import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VistaPersona } from './entities/vista_persona.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthPersonaDto } from './dto/auth-persona.dto';
import { Expedido } from 'src/common/enums/expedido.enum';

@Injectable()
export class VistaPersonaService {
  constructor(
    @InjectRepository(VistaPersona, 'base_upea')
    private readonly vistaPersonaRepository: Repository<VistaPersona>
  ) { }

  findAll() {
    return `This action returns all vistaPersona`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vistaPersona`;
  }

  async findPersona(ci: string, exp: Expedido, fecha_nac: Date) {
    const persona = await this.vistaPersonaRepository.findOne({
      where: {
        ci: ci,
        expedido: exp,
        fecha_nac: fecha_nac
      }
    });

    if (!persona) {
      throw new NotFoundException('La persona no existe en los registros')
    }

    return persona
  }

  async findOneByCi(auth: AuthPersonaDto) {
    const [nombre, ci] = auth.username.split('_')
    if (!(nombre && ci)) {
      throw new BadRequestException('El usuario es incorrecto')
    }

    const user = await this.vistaPersonaRepository
      .createQueryBuilder('persona')
      .where('persona.ci = :ci', { ci })
      .andWhere('LOWER(persona.nombre) LIKE :nombre', { nombre: `${nombre.toLowerCase()}%` })
      .andWhere("DATE_FORMAT(persona.fecha_nac, '%d-%m-%Y') = :fecha_nac", { fecha_nac: auth.password })
      .getOne();

    if (!user) {
      throw new NotFoundException('La persona no existe en los registros')
    }

    return user
  }
}
