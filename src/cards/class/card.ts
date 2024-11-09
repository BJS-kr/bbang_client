import { CardType } from '../../protobuf/compiled';

export class Card {
  type: CardType;
  isDirectUse: boolean;
  isTargetSelect: boolean;

  constructor({ type, isDirectUse, isTargetSelect }: { type: CardType; isDirectUse: boolean; isTargetSelect: boolean }) {
    this.type = type;
    this.isDirectUse = isDirectUse;
    this.isTargetSelect = isTargetSelect;
  }
}
