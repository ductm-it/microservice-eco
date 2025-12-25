import { Test, TestingModule } from '@nestjs/testing';
import { OrderServiceController } from './order-service.controller';

describe('OrderServiceController', () => {
  let controller: OrderServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderServiceController],
    }).compile();

    controller = module.get<OrderServiceController>(OrderServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
