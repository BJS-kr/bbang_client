import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class HandGun extends Card {
  constructor() {
    super({
      type: CardType.HAND_GUN,
      isDirectUse: true,
      isTargetSelect: false,
    });
  }
}
