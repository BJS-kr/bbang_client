import { CARD_TYPE, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';

export class Malang extends Character {
  constructor() {
    super({
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00005,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: 0,
    });

    this.on('takeDamage', (damage) => {
      for (let i = 0; i < damage; i++) {
        // TODO 카드 획득 랜덤이어야 하나?
        this.acquireCard({ type: CARD_TYPE.CAD00001, count: 1 });
      }
    });
  }
}
