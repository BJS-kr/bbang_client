import { CHARACTER_HP } from '../constants/game';
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
import { CharacterType, RoleType } from '../protobuf/compiled';

const TARGET_HP_BONUS = 1;
const CHARACTER_CLASS_MAP = {
  [CharacterType.RED]: Red,
  [CharacterType.BLUE]: Blue,
  [CharacterType.SHARK]: Shark,
  [CharacterType.KNIGHT]: Knight,
  [CharacterType.MALANG]: Malang,
  [CharacterType.DINO]: Dino,
  [CharacterType.FROGGY]: Froggy,
  [CharacterType.PINK]: Pink,
  [CharacterType.SWIM_GLASSES]: SwimGlasses,
  [CharacterType.MASK]: Mask,
  [CharacterType.SLIME]: Slime,
  [CharacterType.DINOSAUR]: Dinosaur,
  [CharacterType.PINK_SLIME]: PinkSlime,
};

export const createCharacter = ({
  userId,
  characterType,
  roleType,
  onTakeDamage,
}: {
  userId: string;
  characterType: number;
  roleType: RoleType;
  onTakeDamage: () => void;
}) => {
  const CharacterClass = CHARACTER_CLASS_MAP[characterType] || Character;
  if (CharacterClass === Character) {
    throw new Error('CharacterClass is not defined');
  }

  switch (roleType) {
    case RoleType.TARGET:
      return new CharacterClass({ userId, hp: CHARACTER_HP[characterType] + TARGET_HP_BONUS, roleType, onTakeDamage });

    default:
      return new CharacterClass({ userId, roleType, onTakeDamage });
  }
};
