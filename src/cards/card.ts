import { CARD_TYPE } from '../constants/game';

export class Card {
  type: CARD_TYPE;
  isDirectUse: boolean;
  isTargetSelect: boolean;

  constructor({ type, isDirectUse, isTargetSelect }: { type: CARD_TYPE; isDirectUse: boolean; isTargetSelect: boolean }) {
    this.type = type;
    this.isDirectUse = isDirectUse;
    this.isTargetSelect = isTargetSelect;
  }
}
