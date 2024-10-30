import { CHARACTER_TYPE } from '../src/constants/game';
import { Character } from './character';
import { v4 as uuid } from 'uuid';

export class Red extends Character {
  constructor() {
    super({
      instanceId: uuid(),
      name: '빨강이',
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00012,
      isLeft: true,
      baseDefenseChance: 0,
      amountForDefense: 1,
      bangPerDay: Infinity,
    });
  }
}
