import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class ContainmentUnit extends Card {
  constructor() {
    super({ type: CARD_TYPE.CONTAINMENT_UNIT, isDirectUse: false, isTargetSelect: true });
  }

  static canEscape(): boolean {
    return Math.random() <= 0.25;
  }
}
