import { Card } from './card';
import { CARD_TYPE } from '../../constants/game';

export class LaserPointer extends Card {
  constructor() {
    super({ type: CARD_TYPE.LASER_POINTER, isDirectUse: true, isTargetSelect: false });
  }
}
