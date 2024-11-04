import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class Call119 extends Card {
  constructor() {
    super({ type: CARD_TYPE.CALL_119, isDirectUse: true, isTargetSelect: false });
  }
}
