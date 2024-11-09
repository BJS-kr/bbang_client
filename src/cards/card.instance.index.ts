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
import { CardType } from '../protobuf/compiled';

export const cards = {
  [CardType.BBANG]: new BBang(),
  [CardType.BIG_BBANG]: new BigBBang(),
  [CardType.SHIELD]: new Shield(),
  [CardType.AUTO_SHIELD]: new AutoShield(),
  [CardType.DEATH_MATCH]: new DeathMatch(),
  [CardType.VACCINE]: new Vaccine(),
  [CardType.CALL_119]: new Call119(),
  [CardType.GUERRILLA]: new Guerrilla(),
  [CardType.ABSORB]: new Absorb(),
  [CardType.HALLUCINATION]: new Hallucination(),
  [CardType.FLEA_MARKET]: new FleaMarket(),
  [CardType.MATURED_SAVINGS]: new MaturedSavings(),
  [CardType.WIN_LOTTERY]: new WinLottery(),
  [CardType.LASER_POINTER]: new LaserPointer(),
  [CardType.BOMB]: new Bomb(),
  [CardType.SATELLITE_TARGET]: new SatelliteTarget(),
  [CardType.CONTAINMENT_UNIT]: new ContainmentUnit(),
  [CardType.DESERT_EAGLE]: new DesertEagle(),
  [CardType.HAND_GUN]: new HandGun(),
  [CardType.AUTO_RIFLE]: new AutoRifle(),
  [CardType.SNIPER_GUN]: new SniperGun(),
  [CardType.STEALTH_SUIT]: new StealthSuit(),
  [CardType.RADAR]: new Radar(),
};
