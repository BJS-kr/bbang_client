import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../../constants/game';
import { CardProps, Character } from './character';

export class Blue extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: ROLE_TYPE; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CHARACTER_TYPE.BLUE],
      characterType: CHARACTER_TYPE.BLUE,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.BLUE],
      onTakeDamage,
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
