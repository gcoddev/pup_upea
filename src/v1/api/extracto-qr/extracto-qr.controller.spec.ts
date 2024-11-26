import { Test, TestingModule } from '@nestjs/testing';
import { ExtractoQrController } from './extracto-qr.controller';
import { ExtractoQrService } from './extracto-qr.service';

describe('ExtractoQrController', () => {
  let controller: ExtractoQrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtractoQrController],
      providers: [ExtractoQrService],
    }).compile();

    controller = module.get<ExtractoQrController>(ExtractoQrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
