import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constant';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports:[
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports:[ AuthService ]
})
export class AuthModule {}