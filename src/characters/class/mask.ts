import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character } from './character';

export class Mask extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: RoleType; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.MASK],
      characterType: CharacterType.MASK,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.MASK],
      onTakeDamage,
    });
  }

  acquireCardsFromDeadCharacter(character: Character) {
    if (character.hp > 0) return;

    for (const [type, count] of character.handCards.entries()) {
      this.acquireCard({ type, count });
    }
  }
}
