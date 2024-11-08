import { pickRandomCardType } from '../../cards/utils/helpers';
import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../../constants/game';
import { Character } from './character';

export class Pink extends Character {
  constructor({ userId, roleType, hp }: { userId: string; roleType: ROLE_TYPE; hp?: number }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CHARACTER_TYPE.PINK],
      characterType: CHARACTER_TYPE.PINK,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.PINK],
    });

    this.on('loseCard', () => {
      const cardAmount = Array.from(this.handCards.values()).reduce((acc, cur) => acc + cur, 0);

      if (cardAmount === 0) {
        this.acquireCard({ type: pickRandomCardType(), count: 1 });
      }
    });
  }
}
