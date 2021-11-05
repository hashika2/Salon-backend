import { Body, Controller, Get,Post, Param, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
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

	@Post('/upload')
	@UseInterceptors(FileInterceptor('file'))
	uploadBucket(@UploadedFile() file){
		return this.storeService.uploadS3Bucket(file);
	}
}
