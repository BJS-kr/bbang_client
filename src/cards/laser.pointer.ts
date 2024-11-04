import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class LaserPointer extends Card {
  constructor() {
    super({ type: CARD_TYPE.LASER_POINTER, isDirectUse: true, isTargetSelect: false });
  }
}
