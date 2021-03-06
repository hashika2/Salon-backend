import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreEntity } from './store.entity';
import * as multerS3 from 'multer-s3';
import { S3 } from 'aws-sdk';
import fs from 'fs';

@Injectable()
export class StoreService {
	constructor(@InjectRepository(StoreEntity) private storeRepository: Repository<StoreEntity>){}

	async getAllStoreData(): Promise<Object[]> {
		// const res = await this.storeRepository.find();
		// console.log
		// return res;
		return [
			{
				name: 'Hashika Maduranga',
				work: 'Hair cutting, coloring hair styling',
				price: 10,
				avatar:
					'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
			},
			{
				name: 'Hashika Maduranga',
				work: 'Hair cutting, coloring hair styling',
				price: 10,
				avatar:
					'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
			},
			{
				sotoreId: 'store1',
				name: 'Hashika Maduranga',
				work: 'Hair cutting, coloring hair styling',
				price: '10',
				avatar:
					'https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc='
			}
		];
	}

	getStoreData(id: string): Object {
		// get Id related data
		return [
			{
				name: 'Hair Styling',
				min: '30',
				price: '10',
				avatar:
					'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
			},
			{
				name: 'Make Up',
				min: '30',
				price: '10',
				avatar:
					'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
			},
			{
				name: 'Hair Styling',
				min: '30',
				price: '10',
				avatar:
					'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
			},
			{
				name: 'Hair Styling',
				min: '30',
				price: '10',
				avatar:
					'https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8='
			}
		];
	}

	async uploadS3Bucket(file){
		try {
			const { originalname } = file;
			const bucketS3 = 'salondetailsbucket';
			
			return await this.uploadS3(file.buffer, bucketS3, originalname);
		  } catch (error) {
			
		  }
	}

	async uploadS3(file, bucket, name) {
		const s3 = new S3({
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		});
		const params = {
			Bucket: bucket,
			Key: String(name),
			Body: file,
		};
		return new Promise((resolve, reject) => {
			s3.upload(params, (err, data) => {
			if (err) {
				// Logger.error(err);
				reject(err.message);
			}
			console.log(data)
			resolve(data);
			});
		});
	}

	getS3() {
		return new S3({
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
		});
	}
	
}
