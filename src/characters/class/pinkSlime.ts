import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../../constants/game';
import { Character } from './character';

export class PinkSlime extends Character {
  constructor({ userId, roleType, hp }: { userId: string; roleType: ROLE_TYPE; hp?: number }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CHARACTER_TYPE.PINK_SLIME],
      characterType: CHARACTER_TYPE.PINK_SLIME,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.PINK_SLIME],
    });
  }

  acquireCardFromOtherCharacter(otherCharacter: Character) {
    const card = otherCharacter.getRandomCard();
    if (!card) return;
    this.acquireCard(card);
  }
}
