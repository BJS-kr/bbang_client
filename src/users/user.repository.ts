import type { InsertedUser, Result, SelectedUser } from '../db/types';
import { db, mockDb } from '../db/db';
import { $users } from '../db/schema';
import { identity } from '../utils/ident';
import { eq } from 'drizzle-orm';
import CustomError from '../utils/customError';
import { ERROR_CODES } from '../constants/error';

console.log(db);
export const createUser = async (email, password, nickname): Promise<Result<InsertedUser>> => {
  const user: InsertedUser = { email, password, nickname };

  if (!db) {
    const userWithId = {
      ...user,
      id: BigInt(mockDb.length),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockDb.push({ ...user, id: BigInt(mockDb.length) });
    return userWithId;
  }
  const result = await db
    .insert($users)
    .values(user)
    .catch(identity<Error>);

  return result instanceof Error ? result : user;
};

export const getUserByUserEmail = async (email: string): Promise<Result<SelectedUser>> => {
  if (!db) {
    const user = mockDb.find((user) => user.email === email);

    if (!user) {
      return new CustomError(ERROR_CODES.USER_NOT_FOUND, 'user not found');
    }

    return { ...user };
  }

  const user = await db.query.$users.findFirst({
    where: eq($users.email, email),
  });

  if (!user) {
    return new CustomError(ERROR_CODES.USER_NOT_FOUND, 'user not found');
  }

  return user;
};
