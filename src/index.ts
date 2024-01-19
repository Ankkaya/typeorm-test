import { AppDataSource } from './data-source'
import { User } from './entity/User'
import { IdCard } from './entity/IdCard'

AppDataSource.initialize()
    .then(async () => {
        // const user = new User()
        // user.firstName = 'Ankkaya'
        // user.lastName = 'Saw'
        // user.age = 25

        // const idCard = new IdCard()
        // idCard.cardName = '123456789012345678'
        // idCard.user = user

        // await AppDataSource.manager.save(user)
        // await AppDataSource.manager.save(idCard)

        // 自动增删改关联的 entity，不需要 save user
        // const user = new User()
        // user.firstName = 'Ankkaya'
        // user.lastName = 'Leo'
        // user.age = 15

        // const idCard = new IdCard()
        // idCard.cardName = '0000000000'
        // idCard.user = user

        // await AppDataSource.manager.save(idCard)

        // idCard 关联 user 也被查出来
        // const ics = await AppDataSource.manager.find(IdCard, {
        //     relations: {
        //         user: true,
        //     },
        // })
        // console.log(ics)

        // const ics = await AppDataSource.manager
        //     .getRepository(IdCard)
        //     .createQueryBuilder('ic')
        //     .leftJoinAndSelect('ic.user', 'u')
        //     .getMany()

        // const ics = await AppDataSource.manager.createQueryBuilder(IdCard, 'ic')
        //     .leftJoinAndSelect('ic.user', 'u')
        //     .getMany()

        // console.log(ics)

        // 修改操作
        // const user = new User()
        // user.id = 1
        // user.firstName = 'Mark'
        // user.lastName = 'Twain'
        // user.age = 100

        // const idCard = new IdCard()
        // idCard.id = 1
        // idCard.cardName = '99999999'
        // idCard.user = user

        // await AppDataSource.manager.save(idCard)

        // 删除
        // await AppDataSource.manager.delete(User, 1)

        // 没有级联删除，需要手动删除
        // const idCard = await AppDataSource.manager.findOne(IdCard, {
        //     where: {
        //         id: 1,
        //     },
        //     relations: {
        //         user: true,
        //     },
        // })

        // await AppDataSource.manager.delete(User, idCard.user.id)
        // await AppDataSource.manager.delete(IdCard, idCard.id)

        const user = await AppDataSource.manager.find(User, {
            relations: {
                idCard: true,
            },
        })
        console.log(user)
    })
    .catch((error) => console.log(error))
