import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class Guerrilla extends Card {
  constructor() {
    super({ type: CARD_TYPE.GUERRILLA, isDirectUse: true, isTargetSelect: false });
  }
}
