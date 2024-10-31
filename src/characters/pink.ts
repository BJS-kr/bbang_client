import { CARD_TYPE, CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';

export class Pink extends Character {
  constructor() {
    super({
      hp: CHARACTER_HP[CHARACTER_TYPE.CHA00008],
      characterType: CHARACTER_TYPE.CHA00008,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.CHA00008],
    });

    this.on('loseCard', () => {
      const cardAmount = Array.from(this.handCards.values()).reduce((acc, cur) => acc + cur, 0);

      if (cardAmount === 0) {
        // TODO 카드 획득 랜덤이어야 하나?
        this.acquireCard({ type: CARD_TYPE.CAD00001, count: 1 });
      }
    });
  }
}
