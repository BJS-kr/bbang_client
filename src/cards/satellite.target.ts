import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class SatelliteTarget extends Card {
  constructor() {
    super({ type: CARD_TYPE.SATELLITE_TARGET, isDirectUse: false, isTargetSelect: false });
  }
}
