import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class Guerrilla extends Card {
  constructor() {
    super({ type: CardType.GUERRILLA, isDirectUse: true, isTargetSelect: false });
  }
}
