import { CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';

export class Froggy extends Character {
  constructor() {
    super({
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00007,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: 25,
    });
  }
}
