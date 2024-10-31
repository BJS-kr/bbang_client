import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Card, Character } from './character';

export class Knight extends Character {
  constructor() {
    super({
      hp: CHARACTER_HP[CHARACTER_TYPE.CHA00004],
      characterType: CHARACTER_TYPE.CHA00004,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.CHA00004],
      roleType: ROLE_TYPE.NONE,
    });
  }

  acquireCardTwice(card1: Card, card2: Card) {
    this.acquireCard(card1);
    this.acquireCard(card2);
  }
}
