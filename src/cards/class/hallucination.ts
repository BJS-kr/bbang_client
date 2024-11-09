import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class Hallucination extends Card {
  constructor() {
    super({ type: CardType.HALLUCINATION, isDirectUse: false, isTargetSelect: true });
  }
}
