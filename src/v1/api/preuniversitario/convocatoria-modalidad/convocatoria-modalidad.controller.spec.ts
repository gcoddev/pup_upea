import { Test, TestingModule } from '@nestjs/testing';
import { ConvocatoriaModalidadController } from './convocatoria-modalidad.controller';
import { ConvocatoriaModalidadService } from './convocatoria-modalidad.service';

describe('ConvocatoriaModalidadController', () => {
  let controller: ConvocatoriaModalidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvocatoriaModalidadController],
      providers: [ConvocatoriaModalidadService],
    }).compile();

    controller = module.get<ConvocatoriaModalidadController>(ConvocatoriaModalidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
