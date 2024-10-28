import { Injectable } from '@nestjs/common';
import { CreateCarreraSedeDto } from './dto/create-carrera-sede.dto';
import { UpdateCarreraSedeDto } from './dto/update-carrera-sede.dto';
import { Repository } from 'typeorm';
import { CarreraSede } from './entities/carrera-sede.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CarreraService } from '../carrera/carrera.service';
import { SedeService } from '../sede/sede.service';
import { AreaService } from '../area/area.service';

@Injectable()
export class CarreraSedeService {
  constructor(
    @InjectRepository(CarreraSede, 'base_upea')
    private readonly carreraSedeRepository: Repository<CarreraSede>,
    private readonly carreraService: CarreraService,
    private readonly sedeService: SedeService,
    private readonly areaService: AreaService,
  ) { }

  create(createCarreraSedeDto: CreateCarreraSedeDto) {
    return 'This action adds a new carreraSede';
  }

  async findAll() {
    const carreraSedeAll = await this.carreraSedeRepository.find({
      order: {
        car_id: 'ASC'
      }
    })
    const carrerasSedes = []
    for (const cs of carreraSedeAll) {
      const carrera = await this.carreraService.findOne(cs.car_id)
      const sede = await this.sedeService.findOne(cs.id_sede)
      const area = await this.areaService.findOne(cs.area_id)

      carrerasSedes.push({
        ...cs,
        carrera,
        sede,
        area
      })
    }

    return carrerasSedes
  }

  async findOneByCarr(id: number) {
    const carrSede = await this.carreraSedeRepository.findBy({ car_id: id })
    const carrerasSedes = []

    for (const cs of carrSede) {
      const carrera = await this.carreraService.findOne(cs.car_id)
      const sede = await this.sedeService.findOne(cs.id_sede)
      const area = await this.areaService.findOne(cs.car_id)

      carrerasSedes.push({
        ...cs,
        carrera,
        sede,
        area
      })
    }

    return carrerasSedes
    // const carrSede = await this.carreraSedeRepository.findOneBy({ car_id: id })

    // if (!carrSede) {
    //   return {
    //     success: false,
    //     message: 'Carreras sedes no encontrada'
    //   }
    // }

    // return carrSede
  }

  findOne(id: number) {
    return `This action returns a #${id} carreraSede`;
  }

  update(id: number, updateCarreraSedeDto: UpdateCarreraSedeDto) {
    return `This action updates a #${id} carreraSede`;
  }

  remove(id: number) {
    return `This action removes a #${id} carreraSede`;
  }
}
