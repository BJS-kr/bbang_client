import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { CardProps, Character } from './character';

export class Blue extends Character {
  constructor() {
    super({
      hp: CHARACTER_HP[CHARACTER_TYPE.CHA00013],
      characterType: CHARACTER_TYPE.CHA00013,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.CHA00013],
    });
  }

  switchCard(from: CardProps, to: CardProps) {
    if ((this.handCards.get(from.type) ?? 0) < 1) {
      return;
    }

    from.count = 1;
    to.count = 1;

    this.loseCard(from);
    this.acquireCard(to);
  }
}
