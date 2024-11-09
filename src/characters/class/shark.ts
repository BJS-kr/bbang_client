import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character } from './character';

export class Shark extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: RoleType; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.SHARK],
      characterType: CharacterType.SHARK,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.SHARK],
      onTakeDamage,
    });
  }
}
