import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserServiceService } from './user-service.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('user-service')
export class UserServiceController {
    constructor(private readonly userServiceService: UserServiceService) {}

    @Get('getHello')
    getHello() {
        return this.userServiceService.getHello();
    }

    @Post('createUser')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userServiceService.createUser(createUserDto);
    }
}
