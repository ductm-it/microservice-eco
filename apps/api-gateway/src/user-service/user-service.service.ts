import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
@Injectable()
export class UserServiceService {
    constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

    getHello() {
        return this.client.send('getHello', {});
    }
}
