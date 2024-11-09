import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class SniperGun extends Card {
  constructor() {
    super({
      type: CardType.SNIPER_GUN,
      isDirectUse: true,
      isTargetSelect: false,
    });
  }
}
