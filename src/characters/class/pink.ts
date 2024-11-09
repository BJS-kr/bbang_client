import { pickRandomCardType } from '../../cards/utils/helpers';
import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character } from './character';

export class Pink extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: RoleType; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.PINK],
      characterType: CharacterType.PINK,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.PINK],
      onTakeDamage,
    });

    this.on('loseCard', () => {
      const cardAmount = Array.from(this.handCards.values()).reduce((acc, cur) => acc + cur, 0);

      if (cardAmount === 0) {
        this.acquireCard({ type: pickRandomCardType(), count: 1 });
      }
    });
  }
}
