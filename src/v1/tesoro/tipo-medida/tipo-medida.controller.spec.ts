import { Test, TestingModule } from '@nestjs/testing';
import { TipoMedidaController } from './tipo-medida.controller';
import { TipoMedidaService } from './tipo-medida.service';

describe('TipoMedidaController', () => {
  let controller: TipoMedidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoMedidaController],
      providers: [TipoMedidaService],
    }).compile();

    controller = module.get<TipoMedidaController>(TipoMedidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
