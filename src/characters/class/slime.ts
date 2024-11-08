import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../../constants/game';
import { CardProps, Character } from './character';

export class Slime extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: ROLE_TYPE; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CHARACTER_TYPE.SLIME],
      characterType: CHARACTER_TYPE.SLIME,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.SLIME],
      onTakeDamage,
    });
  }

  acquireCardFromOtherCharacter(character: Character) {
    const otherCharacterCard = character.getRandomCard();

    if (!otherCharacterCard) return;

    this.acquireCard(otherCharacterCard);
  }
}
