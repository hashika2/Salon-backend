import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from './auth.constant';
import { AuthController } from './auth.controller';
import { UserEntity } from './auth.entity';
import { AuthService } from './auth.service';

@Module({
  imports:[
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports:[ AuthService ]
})
export class AuthModule {}