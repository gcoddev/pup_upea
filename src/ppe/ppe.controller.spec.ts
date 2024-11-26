import { Test, TestingModule } from '@nestjs/testing';
import { PpeController } from './ppe.controller';
import { PpeService } from './ppe.service';

describe('PpeController', () => {
  let controller: PpeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PpeController],
      providers: [PpeService],
    }).compile();

    controller = module.get<PpeController>(PpeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
