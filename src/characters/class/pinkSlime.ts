import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../../constants/game';
import { GameEvents } from '../../game/game.events';
import { Character, TakeDamageEvent } from './character';

export class PinkSlime extends Character {
  constructor({ userId, roleType, hp, gameEvents }: { userId: string; roleType: ROLE_TYPE; hp?: number; gameEvents: GameEvents }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CHARACTER_TYPE.PINK_SLIME],
      characterType: CHARACTER_TYPE.PINK_SLIME,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CHARACTER_TYPE.PINK_SLIME],
      gameEvents,
    });

    this.on('takeDamage', ({ attacker }: TakeDamageEvent) => {
      if (!attacker) return;

      this.acquireCardFromOtherCharacter(attacker.character);
      this.gameEvents.emit('update', this.userId, attacker.id);
    });
  }

  acquireCardFromOtherCharacter(otherCharacter: Character) {
    const card = otherCharacter.getRandomCard();
    if (!card) return;
    this.acquireCard(card);
  }
}
