import { Test, TestingModule } from '@nestjs/testing';
import { OrdenConceptoController } from './orden-concepto.controller';
import { OrdenConceptoService } from './orden-concepto.service';

describe('OrdenConceptoController', () => {
  let controller: OrdenConceptoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdenConceptoController],
      providers: [OrdenConceptoService],
    }).compile();

    controller = module.get<OrdenConceptoController>(OrdenConceptoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
