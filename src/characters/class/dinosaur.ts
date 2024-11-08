import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../../constants/game';
import { Character } from './character';

export class Dinosaur extends Character {
  constructor({ userId, roleType, hp }: { userId: string; roleType: ROLE_TYPE; hp?: number }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CHARACTER_TYPE.DINOSAUR],
      roleType,
      characterType: CHARACTER_TYPE.DINOSAUR,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.DINOSAUR],
    });
  }
}
