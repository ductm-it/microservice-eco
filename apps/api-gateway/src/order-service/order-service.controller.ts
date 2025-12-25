import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderServiceService } from './order-service.service';
@Controller('order-service')
export class OrderServiceController {
    constructor(private readonly orderServiceService: OrderServiceService) {}

    @Get('getHello')
    getHello(): string {
        return this.orderServiceService.getHello();
    }
}
