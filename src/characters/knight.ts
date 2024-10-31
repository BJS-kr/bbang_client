import { CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Card, Character } from './character';

export class Knight extends Character {
  constructor() {
    super({
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00004,
      baseDefenseChance: 0,
      roleType: ROLE_TYPE.NONE,
    });
  }

  acquireCardTwice(card1: Card, card2: Card) {
    this.acquireCard(card1);
    this.acquireCard(card2);
  }
}
