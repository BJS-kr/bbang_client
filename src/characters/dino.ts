import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { CardProps, Character } from './character';

export class Dino extends Character {
  constructor() {
    super({
      hp: CHARACTER_HP[CHARACTER_TYPE.CHA00006],
      characterType: CHARACTER_TYPE.CHA00006,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.CHA00006],
      roleType: ROLE_TYPE.NONE,
    });
  }

  recoverByLoseTwoCards(card1: CardProps, card2: CardProps) {
    if ((this.handCards.get(card1.type) ?? 0) < 1 || (this.handCards.get(card2.type) ?? 0) < 1) {
      return;
    }

    this.loseCard(card1);
    this.loseCard(card2);
    Character.recover(1, this);
  }
}
