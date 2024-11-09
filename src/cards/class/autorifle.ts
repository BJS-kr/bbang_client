import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class AutoRifle extends Card {
  constructor() {
    super({
      type: CardType.AUTO_RIFLE,
      isDirectUse: true,
      isTargetSelect: false,
    });
  }
}
