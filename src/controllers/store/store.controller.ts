import { Controller, Get, Param, Query } from '@nestjs/common';
import { query } from 'express';
import { StoreService } from './store.service';

@Controller('api/store')
export class StoreController {
    constructor(private readonly storeService: StoreService){}

    @Get('/all')
	allStoreData(): Object {
		return this.storeService.getAllStoreData();
	}

	@Get()
	storeData(@Query() query): Object {
		return this.storeService.getStoreData(query.id);
	}
}
