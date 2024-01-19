import { AppDataSource } from './data-source'
import { Article } from './entity/Article'
import { Tag } from './entity/Tag'

AppDataSource.initialize()
    .then(async () => {
        // const a1 = new Article()
        // a1.title = 'aaaa'
        // a1.content = 'aaaaaaaaaa'
        // const a2 = new Article()
        // a2.title = 'bbbbbb'
        // a2.content = 'bbbbbbbbbb'
        // const t1 = new Tag()
        // t1.name = 'ttt1111'
        // const t2 = new Tag()
        // t2.name = 'ttt2222'
        // const t3 = new Tag()
        // t3.name = 'ttt33333'
        // a1.tags = [t1, t2]
        // a2.tags = [t1, t2, t3]
        // const entityManager = AppDataSource.manager
        // await entityManager.save(t1)
        // await entityManager.save(t2)
        // await entityManager.save(t3)
        // await entityManager.save(a1)
        // await entityManager.save(a2)
        // const article = await AppDataSource.manager.find(Article, {
        //     relations: {
        //         tags: true,
        //     },
        // })
        // console.log(article)
        // console.log(article.map((item) => item.tags))
        // const article = await AppDataSource.manager
        //     .createQueryBuilder(Article, 'a')
        //     .leftJoinAndSelect('a.tags', 't')
        //     .getMany()
        // const article = await AppDataSource.manager
        //     .getRepository(Article)
        //     .createQueryBuilder('a')
        //     .leftJoinAndSelect('a.tags', 't')
        //     .getMany()
        // console.log(article)
        // console.log(article.map((item) => item.tags))
        // 找出 id 为 2 的文章，设置 title 为 cccccc， 删除不是 ttt1111 的标签
        // const article = await AppDataSource.manager.findOne(Article, {
        //     where: {
        //         id: 2,
        //     },
        //     relations: {
        //         tags: true,
        //     },
        // })
        // article.title = 'cccccc'
        // article.tags = article.tags.filter((item) => item.name.includes('ttt1111'))
        // await AppDataSource.manager.save(article)
        // await AppDataSource.manager.delete(Article, 1)
        // await AppDataSource.manager.delete(Tag, 1)

        const tags = await AppDataSource.manager.find(Tag, {
            relations: {
                articles: true,
            },
        })
        console.log(tags)
    })
    .catch((error) => console.log(error))
