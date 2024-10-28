import { Injectable } from '@nestjs/common';
import { CreateGestionDto } from './dto/create-gestion.dto';
import { UpdateGestionDto } from './dto/update-gestion.dto';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Gestion } from './entities/gestion.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GestionService {
  constructor(
    @InjectRepository(Gestion, 'base_upea')
    private readonly gestionRepository: Repository<Gestion>
  ) { }

  create(createGestionDto: CreateGestionDto) {
    return 'This action adds a new gestion';
  }

  findAll() {
    const currentYear = new Date().getFullYear();

    return this.gestionRepository.find({
      where: {
        gestion: MoreThanOrEqual(currentYear.toString())
      },
    });
  }

  findOne(id: number) {
    return this.gestionRepository.findOneBy({ id })
  }

  update(id: number, updateGestionDto: UpdateGestionDto) {
    return `This action updates a #${id} gestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestion`;
  }
}
