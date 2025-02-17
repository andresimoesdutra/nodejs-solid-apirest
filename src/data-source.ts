import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "12345",
    database: "appdb",
    synchronize: true,
    dropSchema: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
