import { Test, TestingModule } from '@nestjs/testing';
import { ConvocatoriaModalidadService } from './convocatoria-modalidad.service';

describe('ConvocatoriaModalidadService', () => {
  let service: ConvocatoriaModalidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvocatoriaModalidadService],
    }).compile();

    service = module.get<ConvocatoriaModalidadService>(ConvocatoriaModalidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
