import { CARD_TYPE } from '../../constants/game';
import { Card } from './card';

export class Shield extends Card {
  constructor() {
    super({
      type: CARD_TYPE.SHIELD,
      isDirectUse: true,
      isTargetSelect: false,
    });
  }
}
