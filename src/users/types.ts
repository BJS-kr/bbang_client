import { Character } from '../characters/character';
import { ROLE_TYPE, CHARACTER_TYPE } from '../constants/game';
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
    this.character = new Character({
      userId: this.id,
      hp: 0,
      roleType: ROLE_TYPE.NONE,
      characterType: CHARACTER_TYPE.NONE,
      baseDefenseChance: 0,
    });
  }

  toUserData(viewerId) {
    return {
      id: this.id,
      nickname: this.nickname,
      character: this.character?.toCharacterData(viewerId),
    };
  }
}
