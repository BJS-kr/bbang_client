import { CHARACTER_HP, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { Character } from './character';
import { Blue } from './blue';
import { Red } from './red';
import { Shark } from './shark';
import { Knight } from './knight';
import { Malang } from './malang';
import { Dino } from './dino';
import { Froggy } from './froggy';
import { Pink } from './pink';
import { SwimGlasses } from './swimGlasses';
import { Mask } from './mask';
import { Slime } from './slime';
import { Dinosaur } from './dinosaur';
import { PinkSlime } from './pinkSlime';

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

export const createCharacter = ({ userId, characterType, roleType }: { userId: string; characterType: number; roleType: ROLE_TYPE }) => {
  const CharacterClass = CHARACTER_CLASS_MAP[characterType] || Character;
  if (CharacterClass === Character) {
    throw new Error('CharacterClass is not defined');
  }

  switch (roleType) {
    case ROLE_TYPE.TARGET:
      return new CharacterClass({ userId, hp: CHARACTER_HP[characterType] + TARGET_HP_BONUS, roleType });

    default:
      return new CharacterClass({ userId, roleType });
  }
};
