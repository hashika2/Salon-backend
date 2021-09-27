import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.interface';

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/register')
    register(@Body() user:User):Object{
      return this.authService.setRegister(user);
    }

    @Post('/login')
    login(@Body() user:User):Object{
      return this.authService.setLogin(user);
    }
}
