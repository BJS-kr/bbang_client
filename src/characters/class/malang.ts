import { pickRandomCardType } from '../../cards/utils/helpers';
import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { GameEvents } from '../../game/game.events';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character, TakeDamageEvent } from './character';

export class Malang extends Character {
  constructor({ userId, roleType, hp, gameEvents }: { userId: string; roleType: RoleType; hp?: number; gameEvents: GameEvents }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.MALANG],
      characterType: CharacterType.MALANG,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.MALANG],
      gameEvents,
    });

    this.on('takeDamage', ({ damage }: TakeDamageEvent) => {
      for (let i = 0; i < damage; i++) {
        this.acquireCard({ type: pickRandomCardType(), count: 1 });
      }

      this.gameEvents.emit('update', this.userId);
    });
  }
}
