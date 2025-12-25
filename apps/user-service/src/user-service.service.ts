import { Injectable,  BadRequestException, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from '../../common/dto/create-user.dto';
import { UpdateUserDto } from '../../common/dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserServiceService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  getHello(): string {
    return 'Hello World!';
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
     const { password, ...userInfo } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            ...userInfo,
            password: hashedPassword,
        });
        return user;
  }

  // async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
  //  if(!mongoose.Types.ObjectId.isValid(updateUserDto._id)) {
  //           throw new BadRequestException('Invalid user ID');
  //      }

  //      const user = await this.userModel.findByIdAndUpdate(updateUserDto._id, updateUserDto, {
  //           new: true,
  //           runValidators: true,
  //      });
  //      return user;
  // }
}
