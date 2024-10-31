import { CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Card, Character } from './character';

export class Blue extends Character {
  constructor() {
    super({
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00013,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: 0,
    });
  }

  switchCard(from: Card, to: Card) {
    if ((this.handCards.get(from.type) ?? 0) < 1) {
      return;
    }

    from.count = 1;
    to.count = 1;

    this.loseCard(from);
    this.acquireCard(to);
  }
}
