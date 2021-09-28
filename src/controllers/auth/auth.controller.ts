import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EmailPassword, User } from './user.interface';

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

    @Post('/forget-password')
    forgetPassword(@Body() email: string){
      return this.authService.forgetPassword(email);
    }

    @Post('/confirm-password')
    confirmPassword(@Body() user: EmailPassword){
      console.log(user)
      return this.authService.confirmPassword(user);
    }
}
