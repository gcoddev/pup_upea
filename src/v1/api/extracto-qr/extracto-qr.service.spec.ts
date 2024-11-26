import { Test, TestingModule } from '@nestjs/testing';
import { ExtractoQrService } from './extracto-qr.service';

describe('ExtractoQrService', () => {
  let service: ExtractoQrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtractoQrService],
    }).compile();

    service = module.get<ExtractoQrService>(ExtractoQrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
