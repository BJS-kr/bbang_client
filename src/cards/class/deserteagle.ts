import { CARD_TYPE } from '../../constants/game';
import { Card } from './card';

export class DesertEagle extends Card {
  constructor() {
    super({
      type: CARD_TYPE.DESERT_EAGLE,
      isDirectUse: true,
      isTargetSelect: false,
    });
  }
}
