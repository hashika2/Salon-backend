import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreController } from './store.controller';
import { StoreEntity } from './store.entity';
import { StoreService } from './store.service';
import { StyleStoreEntity } from './styleStore.entity';

@Module({
	imports: [ TypeOrmModule.forFeature([ StoreEntity, StyleStoreEntity ]) ],
	controllers: [ StoreController ],
	providers: [ StoreService ],
	exports: [ StoreService ]
})
export class StoreModule {}
