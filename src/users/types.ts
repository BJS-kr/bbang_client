type Card = {
  type: number;
  count: number;
};

type UserState = {
  state: number;
  nextState: number;
  nextStateAt: number;
};

export type User = {
  id: string;
  nickname: string;
  characterType: number | null;
  roleType: number;
  hp: number;
  weapon: number;
  state: UserState;
  equips: number[];
  debuffs: number[];
  handCards: Card[];
};
