import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class BBang extends Card {
  constructor() {
    super({
      type: CARD_TYPE.BBANG,
      isDirectUse: true,
      isTargetSelect: true,
    });
  }
}
