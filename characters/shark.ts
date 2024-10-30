import { CHARACTER_TYPE } from '../src/constants/game';
import { Character } from './character';
import { v4 as uuid } from 'uuid';

export class Shark extends Character {
  constructor() {
    super({
      instanceId: uuid(),
      name: '상어군',
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00003,
      isLeft: false,
      baseDefenseChance: 0,
      amountForDefense: 2,
      bangPerDay: 1,
    });
  }
}
