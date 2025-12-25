import { Controller, Get } from '@nestjs/common';
// import { MessagePattern } from '@nestjs/microservices';
import { UserServiceService } from './user-service.service';

@Controller('user-service')
export class UserServiceController {
    constructor(private readonly userServiceService: UserServiceService) {}

    // @MessagePattern('getHello')
    // getHello(): string {
    //     return this.userServiceService.getHello();
    // }
    @Get('getHello')
    getHello() {
        return this.userServiceService.getHello();
    }
}
