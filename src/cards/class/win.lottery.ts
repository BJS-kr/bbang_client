import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class WinLottery extends Card {
  constructor() {
    super({ type: CardType.WIN_LOTTERY, isDirectUse: false, isTargetSelect: false });
  }
}
