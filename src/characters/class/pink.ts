import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { GameEvents } from '../../game/game.events';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Room } from '../../rooms/types';
import { Character } from './character';

export class Pink extends Character {
  #room; // TODO 나중에 고쳐주세요....
  constructor({ userId, roleType, hp, gameEvents }: { userId: bigint; roleType: RoleType; hp?: number; gameEvents: GameEvents }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.PINK],
      characterType: CharacterType.PINK,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.PINK],
      gameEvents,
    });

    this.on('setRoom', (room: Room) => {
      this.#room = room;
    });

    this.on('loseCard', () => {
      const cardAmount = Array.from(this.handCards.values()).reduce((acc, cur) => acc + cur, 0);

      if (cardAmount === 0) {
        this.acquireCard({ type: this.#room.pickCardType(), count: 1 });
      }

      this.gameEvents.emit('update', this.userId);
    });
  }
}
