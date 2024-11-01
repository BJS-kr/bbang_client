import { CARD_TYPE } from '../constants/game';
import { BBang } from './bbang';
import { Shield } from './shield';
import { AutoShield } from './shield.auto';

export const cards = {
  [CARD_TYPE.BBANG]: new BBang(),
  [CARD_TYPE.SHIELD]: new Shield(),
  [CARD_TYPE.AUTO_SHIELD]: new AutoShield(),
};
