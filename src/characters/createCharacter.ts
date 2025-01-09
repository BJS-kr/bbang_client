import { CHARACTER_HP } from '../constants/game';
import { Character } from './class/character';
// import { Blue } from './class/blue';
import { Red } from './class/red';
import { Shark } from './class/shark';
// import { Knight } from './class/knight';
import { Malang } from './class/malang';
// import { Dino } from './class/dino';
import { Froggy } from './class/froggy';
import { Pink } from './class/pink';
import { SwimGlasses } from './class/swimGlasses';
import { Mask } from './class/mask';
// import { Slime } from './class/slime';
import { Dinosaur } from './class/dinosaur';
import { PinkSlime } from './class/pinkSlime';
import { Room } from '../rooms/types';
import { GameEvents } from '../game/game.events';
import { CharacterType, RoleType } from '../protobuf/compiled';

const TARGET_HP_BONUS = 1;
const CHARACTER_CLASS_MAP = {
  [CharacterType.RED]: Red,
  [CharacterType.SHARK]: Shark,
  [CharacterType.MALANG]: Malang,
  [CharacterType.FROGGY]: Froggy,
  [CharacterType.PINK]: Pink,
  [CharacterType.SWIM_GLASSES]: SwimGlasses,
  [CharacterType.MASK]: Mask,
  [CharacterType.DINOSAUR]: Dinosaur,
  [CharacterType.PINK_SLIME]: PinkSlime,
};

export const createCharacter = ({
  userId,
  characterType,
  roleType,

  gameEvents,
  room, // TODO 나중에 고쳐주세요....
}: {
  userId: bigint;
  characterType: number;
  roleType: RoleType;

  gameEvents: GameEvents;
  room: Room;
}) => {
  const CharacterClass = CHARACTER_CLASS_MAP[characterType] || Character;
  if (CharacterClass === Character) {
    throw new Error('CharacterClass is not defined');
  }

  let character;
  switch (roleType) {
    case RoleType.TARGET:
      character = new CharacterClass({ userId, hp: CHARACTER_HP[characterType] + TARGET_HP_BONUS, roleType, gameEvents });
      break;

    default:
      character = new CharacterClass({ userId, roleType, gameEvents });
  }

  character.emit('setRoom', room);
  return character;
};
