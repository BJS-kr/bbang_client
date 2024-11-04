import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class FleaMarket extends Card {
  constructor() {
    super({ type: CARD_TYPE.FLEA_MARKET, isDirectUse: true, isTargetSelect: false });
  }
}
