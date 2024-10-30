import { ROLE_TYPE } from '../constants/game';
import { RoomState } from './types';

import type { User } from '../users/types';
import type { Room } from './types';
import { GameState } from '../game/game.state';

export class Rooms {
  #rooms = new Map<number, Room>();
  #roomId = 0;

  createRoom(roomId, roomName, ownerId, maxUserNum) {
    if (this.isRoomExist(roomId)) return false;

    this.#rooms.set(roomId, {
      name: roomName,
      ownerId,
      maxUserNum,
      users: [],
      state: RoomState.WAIT,
      gameState: new GameState(),
    });

    return true;
  }

  createRoomId() {
    return this.#roomId++;
  }

  getRoom(roomId, ownerId) {
    if (!this.isRoomExist(roomId)) return null;

    const room = this.#rooms.get(roomId);

    if (!room) return null;

    const roomData = {
      id: roomId,
      name: room.name,
      ownerId: room.ownerId,
      maxUserNum: room.maxUserNum,
      users: room.users,
    };

    return roomData;
  }

  createInitialUserData(userId: string, nickname: string): User {
    const userData = {
      id: userId,
      nickname,
      characterType: null,
      roleType: ROLE_TYPE.NONE,
      hp: 0,
      weapon: 0,
      state: {
        state: 0,
        nextState: 0,
        nextStateAt: 0,
      },
      equips: [],
      debuffs: [],
      handCards: [],
    };

    return userData;
  }

  isRoomExist(roomId) {
    return this.#rooms.has(roomId);
  }

  isUserInRoom(roomId, userId) {
    if (!this.isRoomExist(roomId)) return false;

    const room = this.#rooms.get(roomId);

    if (!room) return false;

    return room.users.some((user) => user.id === userId);
  }

  joinRoom(roomId, userId, nickname) {
    if (!this.isRoomExist(roomId)) return false;

    const room = this.#rooms.get(roomId);

    if (!room) return false;

    room.users.push(this.createInitialUserData(userId, nickname));

    return true;
  }

  leaveRoom(roomId, userId) {
    if (!this.isUserInRoom(roomId, userId)) return false;

    const room = this.#rooms.get(roomId);

    if (!room) return false;

    const userIndex = room.users.findIndex((user) => user.id === userId);

    room.users.splice(userIndex, 1);

    if (room.users.length === 0) {
      this.#rooms.delete(roomId);
    }

    return true;
  }
}
