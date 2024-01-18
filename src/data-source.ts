import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: 'root',
    database: 'practice',
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
    connectorPackage: 'mysql2',
    extra: {
        authPlugin: 'sha256_password',
    },
})
