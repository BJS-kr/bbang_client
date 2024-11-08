import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../../constants/game';
import { CardProps, Character } from './character';

export class Knight extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: ROLE_TYPE; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CHARACTER_TYPE.KNIGHT],
      characterType: CHARACTER_TYPE.KNIGHT,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.KNIGHT],
      roleType,
      onTakeDamage,
    });
  }

  acquireCardTwice(card1: CardProps, card2: CardProps) {
    this.acquireCard(card1);
    this.acquireCard(card2);
  }
}
