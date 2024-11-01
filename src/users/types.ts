import { Character } from '../characters/character';
import net from 'node:net';

export class User {
  id: string;
  nickname: string;
  socket: net.Socket;
  character: Character;

  constructor(userId: string, nickname: string, socket: net.Socket) {
    this.id = userId;
    this.nickname = nickname;
    this.socket = socket;
  }

  toUserData(viewerId) {
    return {
      id: this.id,
      nickname: this.nickname,
      character: this.character?.toCharacterData(viewerId),
    };
  }
}
