import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class AutoShield extends Card {
  #percent = 0.25;

  constructor() {
    super({
      type: CARD_TYPE.AUTO_SHIELD,
      isDirectUse: false,
      isTargetSelect: false,
    });
  }

  isAutoShielded() {
    return Math.random() < this.#percent;
  }
}
