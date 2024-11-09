import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class Vaccine extends Card {
  constructor() {
    super({ type: CardType.VACCINE, isDirectUse: true, isTargetSelect: false });
  }
}
