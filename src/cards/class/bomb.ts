import { CARD_TYPE } from '../../constants/game';
import { Card } from './card';

export class Bomb extends Card {
  constructor() {
    super({ type: CARD_TYPE.BOMB, isDirectUse: false, isTargetSelect: true });
  }
}
