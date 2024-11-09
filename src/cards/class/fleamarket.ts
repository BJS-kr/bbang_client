import { Card } from './card';
import { CardType } from '../../protobuf/compiled';

export class FleaMarket extends Card {
  constructor() {
    super({ type: CardType.FLEA_MARKET, isDirectUse: true, isTargetSelect: false });
  }
}
