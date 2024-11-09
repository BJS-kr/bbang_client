import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class Call119 extends Card {
  constructor() {
    super({ type: CardType.CALL_119, isDirectUse: true, isTargetSelect: false });
  }
}
