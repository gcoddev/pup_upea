import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrera } from './entities/carrera.entity';
import { Repository } from 'typeorm';
import { AreaService } from '../area/area.service';

@Injectable()
export class CarreraService {
  constructor(
    @InjectRepository(Carrera, 'base_upea')
    private readonly carreraRepository: Repository<Carrera>,
    @Inject(forwardRef(() => AreaService))
    private readonly areaService: AreaService
  ) { }

  create(createCarreraDto: CreateCarreraDto) {
    return 'This action adds a new carrera';
  }

  async findAll() {
    const carreraAll = await this.carreraRepository.find()
    const carreras = []

    for (const carr of carreraAll) {
      const area = await this.areaService.findOne(carr.area_id)

      carreras.push({
        ...carr,
        area
      })
    }

    return carreras
  }

  findAllOne(area_id) {
    return this.carreraRepository.findBy({ area_id })
  }

  findOne(id: number) {
    return this.carreraRepository.findOneBy({ id })
  }

  update(id: number, updateCarreraDto: UpdateCarreraDto) {
    return `This action updates a #${id} carrera`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrera`;
  }
}
