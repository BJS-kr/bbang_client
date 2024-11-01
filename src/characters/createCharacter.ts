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
  [CHARACTER_TYPE.CHA00001]: Red,
  [CHARACTER_TYPE.CHA00002]: Blue,
  [CHARACTER_TYPE.CHA00003]: Shark,
  [CHARACTER_TYPE.CHA00004]: Knight,
  [CHARACTER_TYPE.CHA00005]: Malang,
  [CHARACTER_TYPE.CHA00006]: Dino,
  [CHARACTER_TYPE.CHA00007]: Froggy,
  [CHARACTER_TYPE.CHA00008]: Pink,
  [CHARACTER_TYPE.CHA00009]: SwimGlasses,
  [CHARACTER_TYPE.CHA00010]: Mask,
  [CHARACTER_TYPE.CHA00011]: Slime,
  [CHARACTER_TYPE.CHA00012]: Dinosaur,
  [CHARACTER_TYPE.CHA00013]: PinkSlime,
};

export const createCharacter = ({ userId, characterType, roleType }) => {
  const CharacterClass = CHARACTER_CLASS_MAP[characterType] || Character;

  switch (roleType) {
    case ROLE_TYPE.TARGET:
      return new CharacterClass({ userId, hp: CHARACTER_HP[characterType] + TARGET_HP_BONUS, roleType });

    default:
      return new CharacterClass({ userId, roleType });
  }
};
