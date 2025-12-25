import { Module } from '@nestjs/common';
import { UserServiceController } from './user-service.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserServiceService } from './user-service.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      },
    ]),
  ],
  providers: [UserServiceController, UserServiceService],
  controllers: [UserServiceController],
})
export class UserServiceModule {}
