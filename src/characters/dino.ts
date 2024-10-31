import { CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Card, Character } from './character';
import { v4 as uuid } from 'uuid';

export class Dino extends Character {
  constructor() {
    super({
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00006,
      baseDefenseChance: 0,
      roleType: ROLE_TYPE.NONE,
    });
  }

  recoverByLoseTwoCards(card1: Card, card2: Card) {
    if ((this.handCards.get(card1.type) ?? 0) < 1 || (this.handCards.get(card2.type) ?? 0) < 1) {
      return;
    }

    this.loseCard(card1);
    this.loseCard(card2);
    Character.recover(1, this);
  }
}
