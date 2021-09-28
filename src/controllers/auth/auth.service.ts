import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
const bcrypt = require('bcryptjs');
import { uuid } from 'uuidv4';
import { Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './auth.entity';
import { EmailPassword, User } from './user.interface';

@Injectable()
export class AuthService {
	constructor(private jwtService: JwtService, @InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) {}

	async setRegister(user: User): Promise<UserEntity> {
		const { username, email, password } = user;
		const existData = await this.usersRepository.findOne({email});
		if(existData || existData?.email){
			throw new HttpException('User is Already exist', HttpStatus.BAD_REQUEST);
		}
		user.password = bcrypt.hashSync(password, 10);
		user.userId = uuid();
		return this.usersRepository.save(user);
	}

	async setLogin(user: User): Promise<Object> {
		const { email, password } = user;
		const payload = { email: email, password: password };
		const existData = await this.usersRepository.findOne({email});

		if(!existData || !bcrypt.compareSync(password, existData?.password)){
			throw new HttpException('Password is not matched', HttpStatus.BAD_REQUEST);
		}
		return {
			access_token: this.jwtService.sign(payload),
			username: existData.username,
			userId: existData.userId
		};
	}

	forgetPassword(email: string){
		// send email to the user
	}

	async confirmPassword( user: EmailPassword):Promise<Object> {
		const email = user.email;
		const hashPassword = bcrypt.hashSync(user.password, 10);
		const existData = await this.usersRepository.findOne({email});
		console.log(existData)
		existData.password = hashPassword;
		return this.usersRepository.save(existData);
	}
}
