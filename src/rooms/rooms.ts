import { RoomState } from './types';
import { User } from '../users/types';
import type { Room } from './types';
import { GameState } from '../game/game.state';
import { Context } from '../events/types';

export class Rooms {
  #rooms = new Map<number, Room>();
  #roomId = 0;

  createRoom(roomId, roomName, ownerId, maxUserNum, onPhaseChange) {
    if (this.isRoomExist(roomId)) return false;

    this.#rooms.set(roomId, {
      name: roomName,
      ownerId,
      maxUserNum,
      users: [],
      state: RoomState.WAIT,
      gameState: new GameState(onPhaseChange),
    });

    return true;
  }

  createRoomId() {
    return this.#roomId++;
  }

  getRoom(roomId) {
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

  isRoomExist(roomId) {
    return this.#rooms.has(roomId);
  }

  isUserInRoom(roomId, userId) {
    if (!this.isRoomExist(roomId)) return false;

    const room = this.#rooms.get(roomId);

    if (!room) return false;

    return room.users.some((user) => user.id === userId);
  }

  joinRoom(roomId: number, user: User, ctx: Context) {
    if (!this.isRoomExist(roomId)) return false;

    const room = this.#rooms.get(roomId);

    if (!room) return false;

    room.users.push(user);
    ctx.roomId = roomId;

    return true;
  }

  leaveRoom(roomId: number, userId: string, ctx: Context) {
    if (!this.isUserInRoom(roomId, userId)) return null;

    const room = this.#rooms.get(roomId);

    if (!room) return null;

    const userIndex = room.users.findIndex((user) => user.id === userId);

    const [leavedUser] = room.users.splice(userIndex, 1);

    ctx.roomId = 0;

    if (room.users.length === 0) {
      this.#rooms.delete(roomId);
    }

    return leavedUser;
  }

  isFullRoom(roomId) {
    if (!this.isRoomExist(roomId)) return false;

    const room = this.#rooms.get(roomId)!;

    return room.users.length >= room.maxUserNum;
  }

  pickRandomRoom() {
    const roomIds = Array.from(this.#rooms.keys());
    const picked = Math.floor(Math.random() * roomIds.length);
    const roomId = roomIds[picked];

    if (this.isFullRoom(roomId)) return this.pickRandomRoom();

    return roomId;
  }
}

export const rooms = new Rooms();
