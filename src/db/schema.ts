import { bigint, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const $users = mysqlTable('users', {
  id: bigint('id', { mode: 'bigint' }).primaryKey().autoincrement(),
  email: varchar('email', { length: 30 }).notNull().unique(),
  password: varchar('password', { length: 30 }).notNull(),
  nickname: varchar('nickname', { length: 15 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
