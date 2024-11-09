import { pickRandomCardType } from '../../cards/utils/helpers';
import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character } from './character';

export class Malang extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: RoleType; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.MALANG],
      characterType: CharacterType.MALANG,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.MALANG],
      onTakeDamage,
    });

    this.on('takeDamage', (damage) => {
      for (let i = 0; i < damage; i++) {
        this.acquireCard({ type: pickRandomCardType(), count: 1 });
      }
    });
  }
}
