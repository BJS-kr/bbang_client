import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Card, Character } from './character';

export class Slime extends Character {
  constructor() {
    super({
      hp: CHARACTER_HP[CHARACTER_TYPE.CHA00011],
      characterType: CHARACTER_TYPE.CHA00011,
      roleType: ROLE_TYPE.NONE,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.CHA00011],
    });
  }

  acquireCardFromOtherCharacter(character: Character, card: Card) {
    const otherCharacterCard = character.getRandomCard();

    if (!otherCharacterCard) return;

    this.acquireCard(otherCharacterCard);
  }
}
