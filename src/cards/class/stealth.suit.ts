import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class StealthSuit extends Card {
  constructor() {
    super({ type: CardType.STEALTH_SUIT, isDirectUse: true, isTargetSelect: false });
  }
}
