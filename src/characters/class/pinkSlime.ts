import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { GameEvents } from '../../game/game.events';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { Character, TakeDamageEvent } from './character';

export class PinkSlime extends Character {
  constructor({ userId, roleType, hp, gameEvents }: { userId: string; roleType: RoleType; hp?: number; gameEvents: GameEvents }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.PINK_SLIME],
      characterType: CharacterType.PINK_SLIME,
      roleType,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.PINK_SLIME],
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
