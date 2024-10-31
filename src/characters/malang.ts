import { pickRandomCardType } from '../cards/pickRandomCard';
import { CARD_TYPE, CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';

export class Malang extends Character {
  constructor() {
    super({
      hp: CHARACTER_HP[CHARACTER_TYPE.CHA00005],
      characterType: CHARACTER_TYPE.CHA00005,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.CHA00005],
      position: { x: 0, y: 0 },
    });

    this.on('takeDamage', (damage) => {
      for (let i = 0; i < damage; i++) {
        this.acquireCard({ type: pickRandomCardType(), count: 1 });
      }
    });
  }
}
