import { Character } from '../characters/class/character';
import net from 'node:net';
import { GameEvents } from '../game/game.events';
import { CharacterType, RoleType } from '../protobuf/compiled';

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
      roleType: RoleType.NONE,
      characterType: CharacterType.NONE,
      baseDefenseChance: 0,
      gameEvents: new GameEvents(0),
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
