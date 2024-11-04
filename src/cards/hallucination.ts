import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class Hallucination extends Card {
  constructor() {
    super({ type: CARD_TYPE.HALLUCINATION, isDirectUse: false, isTargetSelect: true });
  }
}
