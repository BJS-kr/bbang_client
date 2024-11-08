import { CARD_TYPE } from '../../constants/game';
import { Card } from './card';

export class Absorb extends Card {
  constructor() {
    super({ type: CARD_TYPE.ABSORB, isDirectUse: false, isTargetSelect: false });
  }
}
