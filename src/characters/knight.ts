import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { CardProps, Character } from './character';

export class Knight extends Character {
  constructor() {
    super({
      userId: '',
      hp: CHARACTER_HP[CHARACTER_TYPE.CHA00004],
      characterType: CHARACTER_TYPE.CHA00004,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.CHA00004],
      roleType: ROLE_TYPE.NONE,
      position: { x: 0, y: 0 },
    });
  }

  acquireCardTwice(card1: CardProps, card2: CardProps) {
    this.acquireCard(card1);
    this.acquireCard(card2);
  }
}
