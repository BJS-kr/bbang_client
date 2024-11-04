import { CARD_TYPE } from '../constants/game';
import { BBang } from './bbang';
import { DeathMatch } from './deathmatch';
import { BigBBang } from './massacre';
import { Shield } from './shield';
import { AutoShield } from './shield.auto';
import { Vaccine } from './vaccine';
import { Call119 } from './call119';
import { Guerrilla } from './guerrilla';
import { Absorb } from './absorb';
import { Hallucination } from './hallucination';
import { FleaMarket } from './fleamarket';
import { MaturedSavings } from './matured.savings';
import { WinLottery } from './win.lottery';
import { LaserPointer } from './laser.pointer';

export const cards = {
  [CARD_TYPE.BBANG]: new BBang(),
  [CARD_TYPE.BIG_BBANG]: new BigBBang(),
  [CARD_TYPE.SHIELD]: new Shield(),
  [CARD_TYPE.AUTO_SHIELD]: new AutoShield(),
  [CARD_TYPE.DEATH_MATCH]: new DeathMatch(),
  [CARD_TYPE.VACCINE]: new Vaccine(),
  [CARD_TYPE.CALL_119]: new Call119(),
  [CARD_TYPE.GUERRILLA]: new Guerrilla(),
  [CARD_TYPE.ABSORB]: new Absorb(),
  [CARD_TYPE.HALLUCINATION]: new Hallucination(),
  [CARD_TYPE.FLEA_MARKET]: new FleaMarket(),
  [CARD_TYPE.MATURED_SAVINGS]: new MaturedSavings(),
  [CARD_TYPE.WIN_LOTTERY]: new WinLottery(),
  [CARD_TYPE.LASER_POINTER]: new LaserPointer(),
};
