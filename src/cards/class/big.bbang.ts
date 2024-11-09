import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class BigBBang extends Card {
  constructor() {
    super({ type: CardType.BIG_BBANG, isDirectUse: true, isTargetSelect: true });
  }
}
