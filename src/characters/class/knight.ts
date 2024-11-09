import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { CardProps, Character } from './character';

export class Knight extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: RoleType; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.KNIGHT],
      characterType: CharacterType.KNIGHT,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.KNIGHT],
      roleType,
      onTakeDamage,
    });
  }

  acquireCardTwice(card1: CardProps, card2: CardProps) {
    this.acquireCard(card1);
    this.acquireCard(card2);
  }
}
