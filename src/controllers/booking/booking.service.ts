import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingEntity } from './booking.entity';

@Injectable()
export class BookingService {
	constructor(@InjectRepository(BookingEntity) private storeRepository: Repository<BookingEntity>){}

	async getAllStoreData(): Promise<BookingEntity[]> {
		const res = await this.storeRepository.find();
		console.log
		return res;
		// return [
		// 	{
		// 		sotoreId: 'store1',
		// 		name: 'Hashika Maduranga',
		// 		work: 'Hair cutting, coloring hair styling',
		// 		price: '10',
		// 		avatar:
		// 			'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
		// 	},
		// 	{
		// 		sotoreId: 'store1',
		// 		name: 'Hashika Maduranga',
		// 		work: 'Hair cutting, coloring hair styling',
		// 		price: '10',
		// 		avatar:
		// 			'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
		// 	},
		// 	{
		// 		sotoreId: 'store1',
		// 		name: 'Hashika Maduranga',
		// 		work: 'Hair cutting, coloring hair styling',
		// 		price: '10',
		// 		avatar:
		// 			'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
		// 	}
		// ];
	}
}
