import { CARD_TYPE, CHARACTER_TYPE } from '../constants/game';
import { Character } from './character';
import { v4 as uuid } from 'uuid';

export class Malang extends Character {
  constructor() {
    super({
      instanceId: uuid(),
      name: '말랑이',
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00005,
      isLeft: false,
      baseDefenseChance: 0,
      amountForDefense: 1,
      bangPerDay: 1,
    });

    this.on('takeDamage', (damage) => {
      for (let i = 0; i < damage; i++) {
        // TODO 카드 획득 랜덤이어야 하나?
        this.acquireCard({ type: CARD_TYPE.CAD00001, count: 1 });
      }
    });
  }
}
