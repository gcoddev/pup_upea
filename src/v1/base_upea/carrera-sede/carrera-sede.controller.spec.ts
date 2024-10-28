import { Test, TestingModule } from '@nestjs/testing';
import { CarreraSedeController } from './carrera-sede.controller';
import { CarreraSedeService } from './carrera-sede.service';

describe('CarreraSedeController', () => {
  let controller: CarreraSedeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarreraSedeController],
      providers: [CarreraSedeService],
    }).compile();

    controller = module.get<CarreraSedeController>(CarreraSedeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
