import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
// import Role from '../roles/roles.enum';
@Schema({
    timestamps: true,
})
export class User {
    @Prop({ default: uuidv4 })
    uuid: string;

    @Prop()
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    username: string;

    @Prop()
    phone: string;

    // @Prop()
    // role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
