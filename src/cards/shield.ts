import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class Shield extends Card<() => boolean> {
  constructor() {
    super({
      type: CARD_TYPE.CAD00003,
      effect: () => {
        return true;
      },
      isDirectUse: true,
      isTargetSelect: false,
    });
  }
}
