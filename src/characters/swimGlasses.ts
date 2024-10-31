import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';

export class SwimGlasses extends Character {
  constructor() {
    super({
      hp: CHARACTER_HP[CHARACTER_TYPE.CHA00009],
      characterType: CHARACTER_TYPE.CHA00009,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.CHA00009],
    });
  }
}
