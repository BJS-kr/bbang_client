import { CARD_TYPE, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';

export class PinkSlime extends Character {
  constructor() {
    super({
      hp: 3,
      characterType: CHARACTER_TYPE.CHA00014,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: 0,
    });
  }

  acquireCardFromOtherCharacter(otherCharacter: Character) {
    const card = otherCharacter.getRandomCard();
    this.acquireCard(card);
  }
}
