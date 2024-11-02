import { CARD_TYPE } from '../constants/game';
import { BBang } from './bbang';
import { DeathMatch } from './deathmatch';
import { Massacre } from './massacre';
import { Shield } from './shield';
import { AutoShield } from './shield.auto';

export const cards = {
  [CARD_TYPE.BBANG]: new BBang(),
  [CARD_TYPE.SHIELD]: new Shield(),
  [CARD_TYPE.AUTO_SHIELD]: new AutoShield(),
  [CARD_TYPE.MASSACRE]: new Massacre(),
  [CARD_TYPE.DEATH_MATCH]: new DeathMatch(),
};
