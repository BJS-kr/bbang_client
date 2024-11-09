import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character } from './character';

export class Dinosaur extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: RoleType; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.DINOSAUR],
      roleType,
      characterType: CharacterType.DINOSAUR,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.DINOSAUR],
      onTakeDamage,
    });
  }
}
