import { CARD_TYPE, CHARACTER_TYPE } from '../src/constants/game';
import { Character } from './character';
import { v4 as uuid } from 'uuid';

export class Pink extends Character {
  constructor() {
    super({
      instanceId: uuid(),
      name: '핑크군',
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00008,
      isLeft: false,
      baseDefenseChance: 0,
      amountForDefense: 1,
      bangPerDay: 1,
    });

    this.on('loseCard', () => {
      const cardAmount = Array.from(this.cards.values()).reduce((acc, cur) => acc + cur, 0);

      if (cardAmount === 0) {
        // TODO 카드 획득 랜덤이어야 하나?
        this.acquireCard({ type: CARD_TYPE.CAD00001, count: 1 });
      }
    });
  }
}
