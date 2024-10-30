import { CHARACTER_TYPE } from '../src/constants/game';
import { Character } from './character';
import { v4 as uuid } from 'uuid';

export class Froggy extends Character {
  constructor() {
    super({
      instanceId: uuid(),
      name: '개굴군',
      hp: 4,
      characterType: CHARACTER_TYPE.CHA00007,
      isLeft: false,
      baseDefenseChance: 25,
      amountForDefense: 1,
      bangPerDay: 1,
    });
  }
}
