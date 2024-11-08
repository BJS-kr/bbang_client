import { Card } from './card';
import { CARD_TYPE } from '../../constants/game';

export class FleaMarket extends Card {
  constructor() {
    super({ type: CARD_TYPE.FLEA_MARKET, isDirectUse: true, isTargetSelect: false });
  }
}
