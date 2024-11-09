import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class ContainmentUnit extends Card {
  constructor() {
    super({ type: CardType.CONTAINMENT_UNIT, isDirectUse: false, isTargetSelect: true });
  }

  static canEscape(): boolean {
    return Math.random() <= 0.25;
  }
}
