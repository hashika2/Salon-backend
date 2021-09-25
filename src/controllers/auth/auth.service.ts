import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.interface';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService){}

    setLogin(user:User):Object{
        const {email,password} = user;
        const payload = {email:email, password:password}

        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
