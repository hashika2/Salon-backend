import { ValidatorOptions } from "@nestjs/common/interfaces/external/validator-options.interface";
import { IsEmail, IsEmpty, IsNotEmpty } from "class-validator";

export class User {

    userId: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    username?:string

    @IsNotEmpty()
    password:string

    // @IsNotEmpty()
    // age?:number

    // @IsNotEmpty()
    // isMale?: boolean
}