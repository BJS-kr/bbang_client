import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class AutoRefile extends Card {
  constructor() {
    super({
      type: CARD_TYPE.AUTO_RIFLE,
      isDirectUse: true,
      isTargetSelect: false,
    });
  }
}
