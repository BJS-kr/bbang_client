import { pickRandomCardType } from '../cards/pickRandomCard';
import { CARD_TYPE, CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';

export class Pink extends Character {
  constructor() {
    super({
      userId: '',
      hp: CHARACTER_HP[CHARACTER_TYPE.CHA00008],
      characterType: CHARACTER_TYPE.CHA00008,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.CHA00008],
      position: { x: 0, y: 0 },
    });

    this.on('loseCard', () => {
      const cardAmount = Array.from(this.handCards.values()).reduce((acc, cur) => acc + cur, 0);

      if (cardAmount === 0) {
        this.acquireCard({ type: pickRandomCardType(), count: 1 });
      }
    });
  }
}
