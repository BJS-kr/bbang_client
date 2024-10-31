import { CARD_TYPE } from '../constants/game';
import { BBang } from './bbang';
import { Shield } from './shield';

export const cards = {
  [CARD_TYPE.CAD00001]: new BBang(),
  [CARD_TYPE.CAD00003]: new Shield(),
};
