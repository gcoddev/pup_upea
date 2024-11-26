import { Test, TestingModule } from '@nestjs/testing';
import { ExtractoController } from './extracto.controller';
import { ExtractoService } from './extracto.service';

describe('ExtractoController', () => {
  let controller: ExtractoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtractoController],
      providers: [ExtractoService],
    }).compile();

    controller = module.get<ExtractoController>(ExtractoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
