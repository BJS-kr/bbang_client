import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { GameEvents } from '../../game/game.events';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character } from './character';

export class Dinosaur extends Character {
  constructor({ userId, roleType, hp, gameEvents }: { userId: bigint; roleType: RoleType; hp?: number; gameEvents: GameEvents }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.DINOSAUR],
      roleType,
      characterType: CharacterType.DINOSAUR,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.DINOSAUR],
      gameEvents,
    });
  }
}
