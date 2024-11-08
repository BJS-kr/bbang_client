import { CARD_TYPE } from '../../constants/game';
import { Card } from './card';

export class StealthSuit extends Card {
  constructor() {
    super({ type: CARD_TYPE.STEALTH_SUIT, isDirectUse: true, isTargetSelect: false });
  }
}
