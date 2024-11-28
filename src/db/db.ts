import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

export let db: any;
export const mockDb: any[] = [];

if (!process.env.NO_DB) {
  const poolConnection = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  db = drizzle(poolConnection, { schema, mode: 'default' });
}
