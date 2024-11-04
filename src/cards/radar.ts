import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class Radar extends Card {
  constructor() {
    super({ type: CARD_TYPE.RADAR, isDirectUse: true, isTargetSelect: false });
  }
}
