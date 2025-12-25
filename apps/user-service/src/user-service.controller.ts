import { Controller, Get } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}

  @MessagePattern('getHello')
  getHello(): string {
    return this.userServiceService.getHello();
  }

  @MessagePattern('createUser')
  createUser(createUserDto: CreateUserDto) {
    return this.userServiceService.createUser(createUserDto);
  }

  // @MessagePattern('updateUser')
  // updateUser(updateUserDto: UpdateUserDto) {
  //   return this.userServiceService.updateUser(updateUserDto);
  // }
}
