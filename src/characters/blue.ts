import { CHARACTER_TYPE } from '../constants/game';
import { Card, Character } from './character';
import { v4 as uuid } from 'uuid';

export class Blue extends Character {
  constructor() {
    super({
      instanceId: uuid(),
      name: '파랑이',
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00013,
      isLeft: true,
      baseDefenseChance: 0,
      amountForDefense: 2,
      bangPerDay: 1,
    });
  }

  switchCard(from: Card, to: Card) {
    if ((this.cards.get(from.type) ?? 0) < 1) {
      return;
    }

    from.count = 1;
    to.count = 1;

    this.loseCard(from);
    this.acquireCard(to);
  }
}
