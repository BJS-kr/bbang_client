import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class Radar extends Card {
  constructor() {
    super({ type: CardType.RADAR, isDirectUse: true, isTargetSelect: false });
  }
}
