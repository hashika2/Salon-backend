import { Controller, Get } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('api/store')
export class StoreController {
    constructor(private readonly storeService: StoreService){}

    @Get('/')
	storeData(): Object {
		return this.storeService.getStoreData();
	}
}
