import { CARD_TYPE } from '../../constants/game';
import { Card } from './card';

export class SniperGun extends Card {
  constructor() {
    super({
      type: CARD_TYPE.SNIPER_GUN,
      isDirectUse: true,
      isTargetSelect: false,
    });
  }
}
