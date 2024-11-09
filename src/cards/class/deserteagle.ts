import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class DesertEagle extends Card {
  constructor() {
    super({
      type: CardType.DESERT_EAGLE,
      isDirectUse: true,
      isTargetSelect: false,
    });
  }
}
