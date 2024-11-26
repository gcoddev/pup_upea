import { Test, TestingModule } from '@nestjs/testing';
import { ExtractoService } from './extracto.service';

describe('ExtractoService', () => {
  let service: ExtractoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtractoService],
    }).compile();

    service = module.get<ExtractoService>(ExtractoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
