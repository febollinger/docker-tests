import 'dotenv/config';
import path from 'path';
import { DataSource, DataSourceOptions } from "typeorm";

export const DataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, './entities/**.{js,ts}');
    const migrationsPath: string = path.join(__dirname, './migrations/**.{js,ts}');

    const nodeEnv: string | undefined = process.env.NODE_ENV;


    if (!process.env.DATABASE_URL){
        throw new Error("Database doesn't found !")
    }

    return{
        type:'postgres',
        url: process.env.DATABASE_URL,
        synchronize:true,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }


}

const AppDataSource = new DataSource(DataSourceConfig())

export default AppDataSource;