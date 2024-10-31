import { CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';

export class Shark extends Character {
  constructor() {
    super({
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00003,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: 0,
    });
  }
}
