import { CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './class/character';
import { Blue } from './class/blue';
import { Red } from './class/red';
import { Shark } from './class/shark';
import { Knight } from './class/knight';
import { Malang } from './class/malang';
import { Dino } from './class/dino';
import { Froggy } from './class/froggy';
import { Pink } from './class/pink';
import { SwimGlasses } from './class/swimGlasses';
import { Mask } from './class/mask';
import { Slime } from './class/slime';
import { Dinosaur } from './class/dinosaur';
import { PinkSlime } from './class/pinkSlime';
import { Room } from '../rooms/types';
import { GameEvents } from '../game/game.events';

const TARGET_HP_BONUS = 1;
const CHARACTER_CLASS_MAP = {
  [CHARACTER_TYPE.RED]: Red,
  [CHARACTER_TYPE.BLUE]: Blue,
  [CHARACTER_TYPE.SHARK]: Shark,
  [CHARACTER_TYPE.KNIGHT]: Knight,
  [CHARACTER_TYPE.MALANG]: Malang,
  [CHARACTER_TYPE.DINO]: Dino,
  [CHARACTER_TYPE.FROGGY]: Froggy,
  [CHARACTER_TYPE.PINK]: Pink,
  [CHARACTER_TYPE.SWIM_GLASSES]: SwimGlasses,
  [CHARACTER_TYPE.MASK]: Mask,
  [CHARACTER_TYPE.SLIME]: Slime,
  [CHARACTER_TYPE.DINOSAUR]: Dinosaur,
  [CHARACTER_TYPE.PINK_SLIME]: PinkSlime,
};

export const createCharacter = ({
  userId,
  characterType,
  roleType,

  gameEvents,
}: {
  userId: string;
  characterType: number;
  roleType: ROLE_TYPE;

  gameEvents: GameEvents;
}) => {
  const CharacterClass = CHARACTER_CLASS_MAP[characterType] || Character;
  if (CharacterClass === Character) {
    throw new Error('CharacterClass is not defined');
  }

  switch (roleType) {
    case ROLE_TYPE.TARGET:
      return new CharacterClass({ userId, hp: CHARACTER_HP[characterType] + TARGET_HP_BONUS, roleType, gameEvents });

    default:
      return new CharacterClass({ userId, roleType, gameEvents });
  }
};
