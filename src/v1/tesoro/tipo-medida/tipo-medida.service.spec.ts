import { Test, TestingModule } from '@nestjs/testing';
import { TipoMedidaService } from './tipo-medida.service';

describe('TipoMedidaService', () => {
  let service: TipoMedidaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoMedidaService],
    }).compile();

    service = module.get<TipoMedidaService>(TipoMedidaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
