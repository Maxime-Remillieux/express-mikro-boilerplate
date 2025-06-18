import { Options } from '@mikro-orm/postgresql';
import { User } from '../entities/User';
import dotenv from 'dotenv';
dotenv.config();

const config: Options = {
  entities: [User],
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
};

export default config;