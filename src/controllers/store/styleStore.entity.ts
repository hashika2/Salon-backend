import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StoreEntity } from "./store.entity";

@Entity('styles_store')
export class StyleStoreEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: ''})
    name: string

    @Column()
    min: number

    @Column()
    price: number

    @Column()
    avatar: string

    @Column({ type: 'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({ type: 'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

    @ManyToOne(() => StoreEntity, store=> store.id )
    storeId: StoreEntity
}