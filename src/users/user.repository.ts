import { v4 as uuidv4 } from 'uuid';
import type { InsertedUser, Result, SelectedUser } from '../db/types';
import { db } from '../db/db';
import { $users } from '../db/schema';
import { identity } from '../utils/ident';
import { eq } from 'drizzle-orm';
import CustomError from '../utils/customError';
import { ERROR_CODES } from '../constants/error';

export const createUser = async (email, password, nickname): Promise<Result<InsertedUser>> => {
  const id = uuidv4();

  const user: InsertedUser = { id, email, password, nickname };

  const result = await db
    .insert($users)
    .values(user)
    .catch(identity<Error>);

  return result instanceof Error ? result : user;
};

export const getUserByUserId = async (userId): Promise<Result<SelectedUser>> => {
  const user = await db.query.$users.findFirst({
    where: eq($users.id, userId),
  });

  if (!user) {
    return new CustomError(ERROR_CODES.USER_NOT_FOUND, 'user not found');
  }

  return user;
};
