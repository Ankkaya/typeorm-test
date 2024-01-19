import { AppDataSource } from './data-source'
import { User } from './entity/User'

AppDataSource.initialize()
    .then(async () => {
        // 单个操作，加上 id 变为修改操作
        const user = new User()
        user.firstName = 'Ankkaya'
        user.lastName = 'Saw'
        user.age = 25
        await AppDataSource.manager.save(User, user)
    })
    .catch((error) => console.log(error))
