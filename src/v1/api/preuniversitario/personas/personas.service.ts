import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';
import { InjectRepository } from '@nestjs/typeorm';

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

  findOneByCI(ci: string) {
    return this.personasRepository.findOneBy({ ci })
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }

  findByCi(ci: string) {
    return this.personasRepository.findOneBy({ ci });
  }

  findByEmail(email: string) {
    return this.personasRepository.findOneBy({ email });
  }
}
