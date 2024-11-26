import { Test, TestingModule } from '@nestjs/testing';
import { PpeService } from './ppe.service';

describe('PpeService', () => {
  let service: PpeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PpeService],
    }).compile();

    service = module.get<PpeService>(PpeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
