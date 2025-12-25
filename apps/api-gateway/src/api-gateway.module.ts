import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { UserServiceModule } from './user-service/user-service.module';
import { OrderServiceModule } from './order-service/order-service.module';

@Module({
  imports: [UserServiceModule, OrderServiceModule],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
