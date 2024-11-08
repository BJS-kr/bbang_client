import { CARD_TYPE } from '../../constants/game';
import { Card } from './card';

export class MaturedSavings extends Card {
  constructor() {
    super({ type: CARD_TYPE.MATURED_SAVINGS, isDirectUse: false, isTargetSelect: false });
  }
}
