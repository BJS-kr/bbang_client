import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class Bomb extends Card {
  constructor() {
    super({ type: CardType.BOMB, isDirectUse: false, isTargetSelect: true });
  }
}
