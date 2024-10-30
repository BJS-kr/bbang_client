import { $users } from './schema';

export type Result<T> = T | Error;

export type InsertedUser = typeof $users.$inferInsert;
export type SelectedUser = typeof $users.$inferSelect;
