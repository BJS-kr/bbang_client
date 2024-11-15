import { SelectedUser } from '../db/types';

class Session {
  #users: Map<bigint, SelectedUser> = new Map();

  join(user: SelectedUser) {
    if (this.#users.has(user.id)) {
      return new Error('User already exists');
    }

    this.#users.set(user.id, user);

    return null;
  }

  getUser(userId: bigint) {
    return this.#users.get(userId) ?? null;
  }

  quit(userId: bigint) {
    if (!this.#users.has(userId)) {
      return new Error('User not found');
    }

    this.#users.delete(userId);

    return null;
  }
}

export const session = new Session();
