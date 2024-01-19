import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { IdCard } from './IdCard'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    // 没有外键一方查询维护外键一方
    @OneToOne(() => IdCard, (idCard) => idCard.user)
    idCard: IdCard
}
