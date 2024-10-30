import { RollType } from '../constants/role.js';

export class Rooms {
  #rooms = new Map();
  #roomId = 0;

  createRoom(roomId, roomName, ownerId, maxUserNum) {
    if (this.isRoomExist(roomId)) return false;

    this.#rooms.set(roomId, {
      roomName,
      ownerId,
      maxUserNum,
      users: [],
    });

    return true;
  }

  createRoomId() {
    return this.#roomId++;
  }

  getRoom(roomId, ownerId) {
    if (!this.isRoomExist(roomId)) return null;

    const room = this.#rooms.get(roomId);
    const roomData = {
      id: roomId,
      name: room.roomName,
      ownerId,
      maxUserNum: room.maxUserNum,
      users: Array.from(room.users),
    };

    return roomData;
  }

  createInitialUserData(userId, nickname) {
    const userData = {
      id: userId,
      nickname,
      characterRCode: null,
      rollType: RollType.NONE,
      hp: 0,
      handCards: [],
      equipCards: [],
    };

    return userData;
  }

  isRoomExist(roomId) {
    return this.#rooms.has(roomId);
  }

  isUserInRoom(roomId, userId) {
    if (!this.isRoomExist(roomId)) return false;

    return this.#rooms.get(roomId).users.some((user) => user.id === userId);
  }

  joinRoom(roomId, userId, nickname) {
    if (!this.isRoomExist(roomId)) return false;

    this.#rooms.get(roomId).users.push(this.createInitialUserData(userId, nickname));

    return true;
  }

  leaveRoom(roomId, userId) {
    if (!this.isUserInRoom(roomId, userId)) return false;

    const userIndex = this.#rooms.get(roomId).users.findIndex((user) => user.id === userId);

    this.#rooms.get(roomId).users.splice(userIndex, 1);

    if (this.#rooms.get(roomId).users.length === 0) {
      this.#rooms.delete(roomId);
    }

    return true;
  }
}
