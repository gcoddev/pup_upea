import { Test, TestingModule } from '@nestjs/testing';
import { CarreraSedeService } from './carrera-sede.service';

describe('CarreraSedeService', () => {
  let service: CarreraSedeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarreraSedeService],
    }).compile();

    service = module.get<CarreraSedeService>(CarreraSedeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
