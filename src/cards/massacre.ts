import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class Massacre extends Card {
  constructor() {
    super({ type: CARD_TYPE.MASSACRE, isDirectUse: true, isTargetSelect: true });
  }
}
