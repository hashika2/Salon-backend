import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { StyleStoreEntity } from "./styleStore.entity";

@Entity('store')
export class BookingEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    date: Date

    @Column()
    picktime: string

    @Column({ type: 'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({ type: 'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

    // @OneToMany(() => StyleStoreEntity,store => store.id )
    // store: StyleStoreEntity

}