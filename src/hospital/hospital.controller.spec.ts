import { Test, TestingModule } from '@nestjs/testing';
import { HospitalController } from './hospital.controller';

describe('Hospital Controller', () => {
  let controller: HospitalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitalController],
    }).compile();

    controller = module.get<HospitalController>(HospitalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
