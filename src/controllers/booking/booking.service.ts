import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { BookingEntity } from './booking.entity';
import { Booking } from './booking.interface';

@Injectable()
export class BookingService {
	constructor(
		@InjectRepository(BookingEntity)
		private bookingRepository: Repository<BookingEntity>
	) {}

	async getAllBookedData(): Promise<Object> {
		// const res = await this.bookingRepository.find();
		const res = [
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
		return res.map((data) => ({
			day: data.day,
			time: data.time,
			isDisable: data.time.length < 6 ? false : true
		}));
	}

	async setBookingDate(booking: Booking): Promise<Object> {
		//get each month booked date times
		const res = await this.bookingRepository.findOne({
			where: {
				date: Equal('2021-10-01 15:31:10')
			}
		});
		console.log(res)
		let pickArray = [];
		// if (res && res.picktime.length>0) {
		// 	pickArray = JSON.parse(res.picktime);
		// 	console.log(pickArray)
		// 	res.picktime = JSON.stringify(pickArray.push(booking.time));
		// 	return await this.bookingRepository.save(res);
		// }
		console.log("*******")

		const time = JSON.stringify(pickArray.push(booking.time));
		const newBooking: Booking = {
			userId: booking.userId,
			date: booking.date,
			time: time,
		};
		return await this.bookingRepository.save(newBooking);
	}
}
