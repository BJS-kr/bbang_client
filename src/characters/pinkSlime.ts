import { CARD_TYPE, CHARACTER_TYPE } from '../constants/game';
import { Card, Character } from './character';
import { v4 as uuid } from 'uuid';

export class PinkSlime extends Character {
  constructor() {
    super({
      instanceId: uuid(),
      name: '핑크슬라임',
      hp: 3,
      characterType: CHARACTER_TYPE.CHA00014,
      isLeft: false,
      baseDefenseChance: 0,
      amountForDefense: 1,
      bangPerDay: 1,
    });
  }

  acquireCardFromOtherCharacter(otherCharacter: Character) {
    const card = otherCharacter.getRandomCard();
    this.acquireCard(card);
  }
}
