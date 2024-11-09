import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { GameEvents } from '../../game/game.events';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character } from './character';

export class Slime extends Character {
  constructor({ userId, roleType, hp, gameEvents }: { userId: string; roleType: RoleType; hp?: number; gameEvents: GameEvents }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.SLIME],
      characterType: CharacterType.SLIME,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.SLIME],
      gameEvents,
    });
  }

  acquireCardFromOtherCharacter(character: Character) {
    const otherCharacterCard = character.getRandomCard();

    if (!otherCharacterCard) return;

    this.acquireCard(otherCharacterCard);
  }
}
