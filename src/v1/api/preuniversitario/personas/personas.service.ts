import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Expedido } from 'src/common/enums/expedido.enum';

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private readonly personasRepository: Repository<Persona>
  ) { }

  create(createPersonaDto: CreatePersonaDto) {
    return this.personasRepository.save(createPersonaDto)
  }

  findAll() {
    return this.personasRepository.find();
  }

  findOneByCI(ci: string, expedido: Expedido, fecha_nac: Date) {
    return this.personasRepository.findOneBy({
      ci,
      expedido,
      fecha_nac
    })
  }

  findOne(id: number) {
    return this.personasRepository.findOneBy({ idPersona: id })
  }

  findByCiExpNac(ci: string, expedido: Expedido, fecha_nac: Date) {
    return this.personasRepository.findOneBy({
      ci,
      expedido,
      fecha_nac
    });
  }

  findByEmail(email: string) {
    return this.personasRepository.findOneBy({ email });
  }
}
