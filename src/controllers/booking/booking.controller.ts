import { Controller, Get, Param, Query } from '@nestjs/common';
import { query } from 'express';
import { BookingService } from './booking.service';

@Controller('api/booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService){}

    @Get('/all')
	allStoreData(): Object {
		console.log("**********")
		return this.bookingService.getAllStoreData();
	}
}
