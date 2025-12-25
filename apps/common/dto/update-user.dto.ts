import { IsNotEmpty } from "class-validator";

export class UpdateUserDto {
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @IsNotEmpty({ message: 'Username is required' })
    username: string;

    @IsNotEmpty({ message: 'Password is required' })
    password: string;

    phone: string;

    role: string;
}
