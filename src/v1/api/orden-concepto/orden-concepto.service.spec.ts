import { Test, TestingModule } from '@nestjs/testing';
import { OrdenConceptoService } from './orden-concepto.service';

describe('OrdenConceptoService', () => {
  let service: OrdenConceptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdenConceptoService],
    }).compile();

    service = module.get<OrdenConceptoService>(OrdenConceptoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
