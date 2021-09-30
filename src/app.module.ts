import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './controllers/auth/auth.entity';
import { AuthModule } from './controllers/auth/auth.module';
import { BookingModule } from './controllers/booking/booking.module';
import { StoreModule } from './controllers/store/store.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'salon_system',
      autoLoadEntities: true,
      entities: [UserEntity],
      synchronize: true, // shouldn't be used in production - may lose data
    }),
    AuthModule,
    StoreModule,
    BookingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
