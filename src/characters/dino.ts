import { CHARACTER_TYPE } from '../constants/game';
import { Card, Character } from './character';
import { v4 as uuid } from 'uuid';

export class Dino extends Character {
  constructor() {
    super({
      instanceId: uuid(),
      name: '다이노',
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00006,
      isLeft: false,
      baseDefenseChance: 0,
      amountForDefense: 1,
      bangPerDay: 1,
    });
  }

  recoverByLoseTwoCards(card1: Card, card2: Card) {
    this.loseCard(card1);
    this.loseCard(card2);
    Character.recover(1, this);
  }
}
