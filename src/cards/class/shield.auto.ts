import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class AutoShield extends Card {
  #percent = 0.25;

  constructor() {
    super({
      type: CardType.AUTO_SHIELD,
      isDirectUse: false,
      isTargetSelect: false,
    });
  }

  isAutoShielded() {
    return Math.random() < this.#percent;
  }
}
