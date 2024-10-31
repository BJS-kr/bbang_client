import { CARD_TYPE } from '../constants/game';

export class Card<T extends Function> {
  type: CARD_TYPE;
  effect: T;
  isDirectUse: boolean;
  isTargetSelect: boolean;

  constructor({ type, effect, isDirectUse, isTargetSelect }: { type: CARD_TYPE; effect: T; isDirectUse: boolean; isTargetSelect: boolean }) {
    this.type = type;
    this.effect = effect;
    this.isDirectUse = isDirectUse;
    this.isTargetSelect = isTargetSelect;
  }
}
