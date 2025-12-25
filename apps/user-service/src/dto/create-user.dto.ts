import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
     @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsNotEmpty({ message: 'Username is required' })
    username: string;

    @IsNotEmpty({ message: 'Password is required' })
    password: string;

    phone: string;

    role: string;
}