import { CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';

type Card = {
  type: number;
  count: number;
};

type UserState = {
  state: number;
  nextState: number;
  nextStateAt: number;
};

export class User {
  id: string;
  nickname: string;
  characterType: number = CHARACTER_TYPE.NONE;
  roleType: number = ROLE_TYPE.NONE;
  hp: number = 0;
  weapon: number = 0;
  state: UserState = {
    state: 0,
    nextState: 0,
    nextStateAt: 0,
  };
  equips: number[] = [];
  debuffs: number[] = [];
  handCards: Card[] = [];

  constructor(id: string, nickname: string) {
    this.id = id;
    this.nickname = nickname;
  }
}
