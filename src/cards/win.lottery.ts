import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class WinLottery extends Card {
  constructor() {
    super({ type: CARD_TYPE.WIN_LOTTERY, isDirectUse: false, isTargetSelect: false });
  }
}
