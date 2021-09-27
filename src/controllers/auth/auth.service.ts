import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { UserEntity } from './auth.entity';
import { User } from './user.interface';

@Injectable()
export class AuthService {
	constructor(private jwtService: JwtService, @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {}

	setRegister(user: User): Observable<UserEntity> {
		const { username, email, password } = user;
		const payload = { email: email, password: password, username: username };

		return from(this.usersRepository.save(user));
	}

	setLogin(user: User): Object {
		const { email, password } = user;
		const payload = { email: email, password: password };

		return {
			access_token: this.jwtService.sign(payload)
		};
	}
}
