import { ValidatorOptions } from "@nestjs/common/interfaces/external/validator-options.interface";
import { IsEmail, IsNotEmpty } from "class-validator";

export class User {
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