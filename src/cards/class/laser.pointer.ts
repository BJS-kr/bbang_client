import { Card } from './card';
import { CardType } from '../../protobuf/compiled';

export class LaserPointer extends Card {
  constructor() {
    super({ type: CardType.LASER_POINTER, isDirectUse: true, isTargetSelect: false });
  }
}
