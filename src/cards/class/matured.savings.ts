import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class MaturedSavings extends Card {
  constructor() {
    super({ type: CardType.MATURED_SAVINGS, isDirectUse: false, isTargetSelect: false });
  }
}
