import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from './auth.entity';
import { User } from './user.interface';

@Injectable()
export class AuthService {
	constructor(private jwtService: JwtService, @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {}

	async setRegister(user: User): Promise<UserEntity> {
		const { username, email, password } = user;
		const existData = await this.usersRepository.findOne({email});

		if(existData.email){
			throw new HttpException('User is Already exist', HttpStatus.BAD_REQUEST);
		}

		return this.usersRepository.save(user);
	}

	setLogin(user: User): Object {
		const { email, password } = user;
		const payload = { email: email, password: password };

		return {
			access_token: this.jwtService.sign(payload)
		};
	}
}
