import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class Shield extends Card {
  constructor() {
    super({
      type: CardType.SHIELD,
      isDirectUse: true,
      isTargetSelect: false,
    });
  }
}
