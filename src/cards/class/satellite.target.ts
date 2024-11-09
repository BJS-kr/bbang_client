import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class SatelliteTarget extends Card {
  constructor() {
    super({ type: CardType.SATELLITE_TARGET, isDirectUse: false, isTargetSelect: false });
  }

  static isHit(): boolean {
    return Math.random() <= 0.03;
  }
}
