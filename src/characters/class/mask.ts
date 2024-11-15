import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { GameEvents } from '../../game/game.events';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character } from './character';

export class Mask extends Character {
  constructor({ userId, roleType, hp, gameEvents }: { userId: bigint; roleType: RoleType; hp?: number; gameEvents: GameEvents }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.MASK],
      characterType: CharacterType.MASK,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.MASK],
      gameEvents,
    });
  }

  acquireCardsFromDeadCharacter(character: Character) {
    if (character.hp > 0) return;

    for (const [type, count] of character.handCards.entries()) {
      this.acquireCard({ type, count });
    }
  }
}
