import { mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const $users = mysqlTable('users', {
  id: varchar('id', { length: 36 }).primaryKey(),
  userId: varchar('user_id', { length: 15 }).notNull().unique(),
  password: varchar('password', { length: 30 }).notNull(),
  nickname: varchar('nickname', { length: 15 }).default('').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
