import { Character } from '../characters/character';
import { CARD_TYPE } from '../constants/game';
import { BBang } from './bbang';
import { Card } from './card';
import { Shield } from './shield';

export const cards = {
  [CARD_TYPE.CAD00001]: new BBang(),
  [CARD_TYPE.CAD00003]: new Shield(),
};
function t(a: Card<any>, c: Character) {
  switch (true) {
    case a instanceof BBang:
      a.effect(c);
      break;
    case a instanceof Shield:
      a.effect();
      break;
  }
}
