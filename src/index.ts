import { AppDataSource } from './data-source'
import { Department } from './entity/Department'
import { Employee } from './entity/Employee'

AppDataSource.initialize()
    .then(async () => {
        // const d1 = new Department()
        // d1.name = '技术部'

        // const e1 = new Employee()
        // e1.name = '张三'
        // e1.department = d1

        // const e2 = new Employee()
        // e2.name = '李四'
        // e2.department = d1

        // const e3 = new Employee()
        // e3.name = '王五'
        // e3.department = d1

        // 一设置 cascade: true，就可以级联保存 Employee
        // await AppDataSource.manager.save(Department, d1)
        // await AppDataSource.manager.save(Employee, [e1, e2, e3])

        // const deps = await AppDataSource.manager.find(Department, {
        //     relations: {
        //         employees: true,
        //     },
        // })
        // console.log(deps)

        // const es = await AppDataSource.manager
        //     .getRepository(Department)
        //     .createQueryBuilder('d')
        //     .leftJoinAndSelect('d.employees', 'e')
        //     .getMany()

        // console.log(es)
        // console.log(es.map((item) => item.employees))

        // const es2 = await AppDataSource.manager
        //     .createQueryBuilder(Department, 'd')
        //     .leftJoinAndSelect('d.employees', 'e')
        //     .getMany()

        // console.log(es2)
        // console.log(es2.map((item) => item.employees))

        const deps = await AppDataSource.manager.find(Department, {
            relations: {
                employees: true,
            },
        })

        // 如果设置 onDelete: 'CASCADE'，则可以级联删除 Employee
        // 不需要手动删除 employees
        await AppDataSource.manager.delete(Employee, deps[0].employees)
        await AppDataSource.manager.delete(Department, deps[0].id)
    })
    .catch((error) => console.log(error))
