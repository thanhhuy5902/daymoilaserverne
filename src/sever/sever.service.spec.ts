import { Test, TestingModule } from '@nestjs/testing';
import { SeverService } from './sever.service';

describe('SeverService', () => {
  let service: SeverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeverService],
    }).compile();

    service = module.get<SeverService>(SeverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
