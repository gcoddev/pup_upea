import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { CarreraService } from '../carrera/carrera.service';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area, 'base_upea')
    private readonly areaRepository: Repository<Area>,
    @Inject(forwardRef(() => CarreraService))
    private readonly carreraService: CarreraService,
  ) { }

  create(createAreaDto: CreateAreaDto) {
    return 'This action adds a new area';
  }

  async findAll() {
    const areaAll = await this.areaRepository.find()
    const areas = []

    for (const area of areaAll) {
      const carreras = await this.carreraService.findAllOne(area.id)

      areas.push({
        ...area,
        carreras
      })
    }

    return areas
  }

  findOne(id: number) {
    return this.areaRepository.findOneBy({ id })
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return `This action updates a #${id} area`;
  }

  remove(id: number) {
    return `This action removes a #${id} area`;
  }
}
