import { CHARACTER_BASE_DEFENSE_CHANCE, CHARACTER_HP } from '../../constants/game';
import { CharacterType, RoleType } from '../../protobuf/compiled';
import { CardProps, Character } from './character';

export class Dino extends Character {
  constructor({ userId, roleType, hp, onTakeDamage }: { userId: string; roleType: RoleType; hp?: number; onTakeDamage: () => void }) {
    super({
      userId,
      hp: hp ?? CHARACTER_HP[CharacterType.DINO],
      characterType: CharacterType.DINO,
      baseDefenseChance: CHARACTER_BASE_DEFENSE_CHANCE[CharacterType.DINO],
      roleType,
      onTakeDamage,
    });
  }

  recoverByLoseTwoCards(card1: CardProps, card2: CardProps) {
    if ((this.handCards.get(card1.type) ?? 0) < 1 || (this.handCards.get(card2.type) ?? 0) < 1) {
      return;
    }

    this.loseCard(card1);
    this.loseCard(card2);
    Character.recover(1, this);
  }
}
