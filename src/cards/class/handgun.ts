import { CARD_TYPE } from '../../constants/game';
import { Card } from './card';

export class HandGun extends Card {
  constructor() {
    super({
      type: CARD_TYPE.HAND_GUN,
      isDirectUse: true,
      isTargetSelect: false,
    });
  }
}
