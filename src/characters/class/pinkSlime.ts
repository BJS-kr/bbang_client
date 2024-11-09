import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character } from './character';

export class PinkSlime extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: RoleType; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.PINK_SLIME],
      characterType: CharacterType.PINK_SLIME,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.PINK_SLIME],
      onTakeDamage,
    });
  }

  acquireCardFromOtherCharacter(otherCharacter: Character) {
    const card = otherCharacter.getRandomCard();
    if (!card) return;
    this.acquireCard(card);
  }
}
