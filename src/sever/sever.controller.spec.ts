import { Test, TestingModule } from '@nestjs/testing';
import { SeverController } from './sever.controller';
import { SeverService } from './sever.service';

describe('SeverController', () => {
  let controller: SeverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeverController],
      providers: [SeverService],
    }).compile();

    controller = module.get<SeverController>(SeverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
