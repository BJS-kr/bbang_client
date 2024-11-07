import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class BigBBang extends Card {
  constructor() {
    super({ type: CARD_TYPE.BIG_BBANG, isDirectUse: true, isTargetSelect: true });
  }
}
