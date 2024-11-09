import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class Absorb extends Card {
  constructor() {
    super({ type: CardType.ABSORB, isDirectUse: false, isTargetSelect: false });
  }
}
