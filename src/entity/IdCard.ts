import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm'
import { User } from './User'

@Entity({
    name: 'id_card',
})
export class IdCard {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50,
        comment: '身份证号',
    })
    cardName: string

    @JoinColumn()
    @OneToOne(() => User, {
        cascade: true, // 告诉 typeorm 增删改 entity 时，也增删改关联的 entity
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    user: User
}
