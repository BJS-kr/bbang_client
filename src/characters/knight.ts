import { CHARACTER_TYPE } from '../constants/game';
import { Card, Character } from './character';
import { v4 as uuid } from 'uuid';

export class Knight extends Character {
  constructor() {
    super({
      instanceId: uuid(),
      name: '기사군',
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00004,
      isLeft: true,
      baseDefenseChance: 0,
      amountForDefense: 2,
      bangPerDay: 1,
    });
  }

  acquireCardTwice(card1: Card, card2: Card) {
    this.acquireCard(card1);
    this.acquireCard(card2);
  }
}
