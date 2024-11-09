import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { GameEvents } from '../../game/game.events';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { CardProps, Character } from './character';

export class Blue extends Character {
  constructor({ userId, roleType, hp, gameEvents }: { userId: string; roleType: RoleType; hp?: number; gameEvents: GameEvents }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.BLUE],
      characterType: CharacterType.BLUE,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.BLUE],
      gameEvents,
    });
  }

  switchCard(from: CardProps, to: CardProps) {
    if ((this.handCards.get(from.type) ?? 0) < 1) {
      return;
    }

    from.count = 1;
    to.count = 1;

    this.loseCard(from);
    this.acquireCard(to);
  }
}
