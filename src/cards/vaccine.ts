import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class Vaccine extends Card {
  constructor() {
    super({ type: CARD_TYPE.VACCINE, isDirectUse: true, isTargetSelect: false });
  }
}
