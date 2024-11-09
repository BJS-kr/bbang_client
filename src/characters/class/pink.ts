import { pickRandomCardType } from '../../cards/utils/helpers';
import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { GameEvents } from '../../game/game.events';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character } from './character';

export class Pink extends Character {
  constructor({ userId, roleType, hp, gameEvents }: { userId: string; roleType: RoleType; hp?: number; gameEvents: GameEvents }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.PINK],
      characterType: CharacterType.PINK,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.PINK],
      gameEvents,
    });

    this.on('loseCard', () => {
      const cardAmount = Array.from(this.handCards.values()).reduce((acc, cur) => acc + cur, 0);

      if (cardAmount === 0) {
        this.acquireCard({ type: pickRandomCardType(), count: 1 });
      }

      this.gameEvents.emit('update', this.userId);
    });
  }
}
