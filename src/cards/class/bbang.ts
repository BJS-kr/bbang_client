import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class BBang extends Card {
  constructor() {
    super({
      type: CardType.BBANG,
      isDirectUse: true,
      isTargetSelect: true,
    });
  }
}
