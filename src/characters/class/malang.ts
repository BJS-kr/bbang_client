import { pickRandomCardType } from '../../cards/utils/helpers';
import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../../constants/game';
import { Character } from './character';

export class Malang extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: ROLE_TYPE; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CHARACTER_TYPE.MALANG],
      characterType: CHARACTER_TYPE.MALANG,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.MALANG],
      onTakeDamage,
    });

    this.on('takeDamage', (damage) => {
      for (let i = 0; i < damage; i++) {
        this.acquireCard({ type: pickRandomCardType(), count: 1 });
      }
    });
  }
}
