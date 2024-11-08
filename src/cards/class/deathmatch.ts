import { CARD_TYPE } from '../../constants/game';
import { Card } from './card';

export class DeathMatch extends Card {
  constructor() {
    super({ type: CARD_TYPE.DEATH_MATCH, isDirectUse: true, isTargetSelect: true });
  }
}
