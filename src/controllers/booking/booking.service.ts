import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingEntity } from './booking.entity';
import { Booking } from './booking.interface';

@Injectable()
export class BookingService {
	constructor(@InjectRepository(BookingEntity) private storeRepository: Repository<BookingEntity>) {}

	async getAllBookedData(): Promise<Object> {
		// const res = await this.storeRepository.find();
		// console.log
		return [
			{
				day: new Date(),
				time: [ '10.00', '1.00' ],
				isDisable: false
			},
			{
				day: new Date(),
				time: [ '10.00', '1.00', '3.00', '5.00', '8.00' ],
				isDisable: true
			},
			{
				day: new Date(),
				time: [ '10.00', '1.00' ],
				isDisable: false
			}
		];
	}

	setBookingDate(booking: Booking) {
		console.log(booking);
		return 'success';
	}
}
