import { CardType } from '../../protobuf/compiled';
import { Card } from './card';

export class DeathMatch extends Card {
  constructor() {
    super({ type: CardType.DEATH_MATCH, isDirectUse: true, isTargetSelect: true });
  }
}
