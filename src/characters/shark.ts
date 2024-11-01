import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';

export class Shark extends Character {
  constructor() {
    super({
      userId: '',
      hp: CHARACTER_HP[CHARACTER_TYPE.CHA00003],
      characterType: CHARACTER_TYPE.CHA00003,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.CHA00003],
      position: { x: 0, y: 0 },
    });
  }
}
