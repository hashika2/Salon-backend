import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Booking } from './booking.interface';
import { BookingService } from './booking.service';

@Controller('api/booking')
export class BookingController {
    constructor(private readonly bookingService: BookingService){}

    @Get('/all')
	allStoreData(): Object {
		return this.bookingService.getAllBookedData();
	}

    @Post('/')
	bookingDate(@Body() booking: Booking) {
		return this.bookingService.setBookingDate(booking);
	}
}
