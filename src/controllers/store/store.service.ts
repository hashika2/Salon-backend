import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreService {
	getStoreData(): Object {
		return [
			{
				name: 'hashika',
				product: 'product'
			},
            {
				name: 'hashika',
				product: 'product'
			},
            {
				name: 'hashika',
				product: 'product'
			}
		];
	}
}
