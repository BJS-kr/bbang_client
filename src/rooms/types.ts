import { GameState } from '../game/game.state';
import type { User } from '../users/types';

export enum RoomState {
  WAIT = 0,
  PREPARE = 1,
  IN_GAME = 2,
}

export type Room = {
  name: string;
  ownerId: string;
  maxUserNum: number;
  users: User[];
  state: RoomState;
  gameState: GameState;
};
