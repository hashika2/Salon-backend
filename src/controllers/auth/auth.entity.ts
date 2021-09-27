import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: ''})
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({ type: 'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column({ type: 'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    updatedAt: Date;
}