import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';

export class PinkSlime extends Character {
  constructor() {
    super({
      userId: '',
      hp: CHARACTER_HP[CHARACTER_TYPE.CHA00013],
      characterType: CHARACTER_TYPE.CHA00013,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.CHA00013],
      position: { x: 0, y: 0 },
    });
  }

  acquireCardFromOtherCharacter(otherCharacter: Character) {
    const card = otherCharacter.getRandomCard();
    this.acquireCard(card);
  }
}
