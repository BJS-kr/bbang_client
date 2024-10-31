import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { $users } from './schema';

export type Result<T> = T | Error;

export type InsertedUser = InferInsertModel<typeof $users>;
export type SelectedUser = InferSelectModel<typeof $users>;
