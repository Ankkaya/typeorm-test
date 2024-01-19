import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Department } from './Department'

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50,
    })
    name: string

    // @JoinColumn() 用于指定外键的字段名
    @JoinColumn({
        name: 'd_id',
    })

    // 一对多只能在多的一边保存外键，因此不需要 @JoinColumn
    // 只需要 save Employee，就可以级联保存 Department
    // 一的一边设置 cascade: true，就可以级联保存 Employee，这边不需要设置 cascade: true，避免循环
    @ManyToOne(() => Department)
    department: Department
}
