import { Character } from '../characters/character';
import { CARD_TYPE } from '../constants/game';
import { Card } from './card';

export class BBang extends Card<(character: Character) => boolean> {
  constructor() {
    super({
      type: CARD_TYPE.CAD00001,
      effect: (character: Character) => {
        character.takeDamage(1);

        return true;
      },
      isDirectUse: true,
      isTargetSelect: true,
    });
  }
}
