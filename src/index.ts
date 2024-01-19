import { AppDataSource } from './data-source'
import { User } from './entity/User'
import { In } from 'typeorm'

AppDataSource.initialize()
    .then(async () => {
        // 单个操作，加上 id 变为修改操作
        // const user = new User()
        // user.id = 1
        // user.firstName = 'Ankkaya'
        // user.lastName = 'Saw'
        // user.age = 25
        // 批量操作
        // await AppDataSource.manager.save(User, [
        //     { firstName: 'ccc', lastName: 'ccc', age: 21 },
        //     { firstName: 'ddd', lastName: 'ddd', age: 22 },
        //     { firstName: 'eee', lastName: 'eee', age: 23 },
        // ])
        // 批量修改
        // await AppDataSource.manager.save(User, [
        //     { id: 2, firstName: 'ccc111', lastName: 'ccc', age: 21 },
        //     { id: 3, firstName: 'ddd222', lastName: 'ddd', age: 22 },
        //     { id: 4, firstName: 'eee333', lastName: 'eee', age: 23 },
        // ])
        // 删除
        // await AppDataSource.manager.delete(User, 1)
        // 批量删除
        // await AppDataSource.manager.delete(User, [2, 3, 4])
        // remove 方法
        // const user = new User()
        // user.id = 1
        // await AppDataSource.manager.remove(User, user)
        // 查找
        // await AppDataSource.manager.save(User, [
        //     { firstName: 'ccc', lastName: 'ccc', age: 21 },
        //     { firstName: 'ddd', lastName: 'ddd', age: 22 },
        //     { firstName: 'eee', lastName: 'eee', age: 23 },
        // ])
        // const user = await AppDataSource.manager.find(User)
        // console.log(user)
        // 条件查询
        // const user = await AppDataSource.manager.findBy(User, {
        //     age: 23,
        // })
        // console.log(user)
        // 返回多少记录
        // const [users, count] = await AppDataSource.manager.findAndCount(User)
        // console.log(users, count)
        // 查询一条
        // const user = await AppDataSource.manager.findOne(User, {
        //     select: {
        //         firstName: true,
        //         age: true,
        //     },
        //     where: {
        //         id: 4,
        //     },
        //     order: {
        //         age: 'ASC',
        //     },
        // })
        // console.log(user)
        // 查询多条
        // const user = await AppDataSource.manager.find(User, {
        //     select: {
        //         firstName: true,
        //         age: true,
        //     },
        //     where: {
        //         id: In([5, 7]),
        //     },
        //     order: {
        //         age: 'ASC',
        //     },
        // })
        // console.log(user)
        // 单个条件查询
        // const user = await AppDataSource.manager.findOneBy(User, {
        //     age: 23,
        // })
        // console.log(user)
        // findOneOrFail，findOneByOrFail 如果没找到，抛出一个 EntityNotFoundError 的异常
        // try {
        //     const user = await AppDataSource.manager.findOneOrFail(User, {
        //         where: {
        //             id: 666,
        //         },
        //     })
        //     console.log(user)
        // } catch (e) {
        //     console.log(e)
        //     console.log('没找到该用户')
        // }
        // query 执行 sql 语句
        // const user = await AppDataSource.manager.query('select * from user where age in(?, ?)', [21, 22])
        // console.log(user)
        // query builder
        // const queryBuilder = await AppDataSource.manager.createQueryBuilder()
        // const user = await queryBuilder.select('user').from(User, 'user').where('user.age = :age', { age: 21 }).getOne()
        // console.log(user)
        // const query = queryBuilder.select('user.name', 'name')
        //     .addSelect('COUNT(post.id)', 'count')
        //     .from(User, 'user')
        //     .leftJoin(Post, 'post', 'post.userId = user.id')
        //     .where('user.id = :id')
        //     .andWhere('post.isActive = :isActive')
        //     .setParameters({id: 1, isActive: true})
        //     .groupBy('user.name')
        //     .having('COUNT(post.id) > :postCount', {postCount: 2})
        // const results = await query.getRawMany()
        // 开始事务
        // await AppDataSource.manager.transaction(async (manager) => {
        //     await manager.save(User, {
        //         id: 4,
        //         firstName: 'ccc',
        //         lastName: 'ccc',
        //         age: 20,
        //     })
        // })
        // 避免每次传入实体类，使用 getRepository 方法，拿到专门处理这个 Entity 的增删改查类，再调用这些方法
        // AppDataSource.manager.getRepository(User)
    })
    .catch((error) => console.log(error))
