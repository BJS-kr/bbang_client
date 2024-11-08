import { CARD_TYPE } from '../constants/game';
import { BBang } from './class/bbang';
import { DeathMatch } from './class/deathmatch';
import { BigBBang } from './class/big.bbang';
import { Shield } from './class/shield';
import { AutoShield } from './class/shield.auto';
import { Vaccine } from './class/vaccine';
import { Call119 } from './class/call119';
import { Guerrilla } from './class/guerrilla';
import { Absorb } from './class/absorb';
import { Hallucination } from './class/hallucination';
import { FleaMarket } from './class/fleamarket';
import { MaturedSavings } from './class/matured.savings';
import { WinLottery } from './class/win.lottery';
import { LaserPointer } from './class/laser.pointer';
import { Bomb } from './class/bomb';
import { SatelliteTarget } from './class/satellite.target';
import { ContainmentUnit } from './class/containment.unit';
import { DesertEagle } from './class/deserteagle';
import { HandGun } from './class/handgun';
import { SniperGun } from './class/snipergun';
import { StealthSuit } from './class/stealth.suit';
import { Radar } from './class/radar';
import { AutoRifle } from './class/autorifle';

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
  [CARD_TYPE.BOMB]: new Bomb(),
  [CARD_TYPE.SATELLITE_TARGET]: new SatelliteTarget(),
  [CARD_TYPE.CONTAINMENT_UNIT]: new ContainmentUnit(),
  [CARD_TYPE.DESERT_EAGLE]: new DesertEagle(),
  [CARD_TYPE.HAND_GUN]: new HandGun(),
  [CARD_TYPE.AUTO_RIFLE]: new AutoRifle(),
  [CARD_TYPE.SNIPER_GUN]: new SniperGun(),
  [CARD_TYPE.STEALTH_SUIT]: new StealthSuit(),
  [CARD_TYPE.RADAR]: new Radar(),
};
