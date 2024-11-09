import { CharacterType, RoleType } from '../protobuf/compiled';

export const CHARACTER_HP = {
  [CharacterType.RED]: 4, // 빨강이
  [CharacterType.BLUE]: 4, // 파랑이
  [CharacterType.SHARK]: 4, // 상어군
  [CharacterType.KNIGHT]: 4, // 기사군
  [CharacterType.MALANG]: 4, // 말랑이
  [CharacterType.DINO]: 4, // 다이노
  [CharacterType.FROGGY]: 4, // 개굴군
  [CharacterType.PINK]: 4, // 핑크군
  [CharacterType.SWIM_GLASSES]: 4, // 물안경군
  [CharacterType.MASK]: 4, // 가면군
  [CharacterType.SLIME]: 4, // 슬라임
  [CharacterType.DINOSAUR]: 3, // 공룡이
  [CharacterType.PINK_SLIME]: 3, // 핑크슬라임
};

export const CHARACTER_BASE_DEFENSE_CHANCE = {
  [CharacterType.RED]: 0, // 빨강이
  [CharacterType.BLUE]: 0, // 파랑이
  [CharacterType.SHARK]: 0, // 상어군
  [CharacterType.KNIGHT]: 0, // 기사군
  [CharacterType.MALANG]: 0, // 말랑이
  [CharacterType.DINO]: 0, // 다이노
  [CharacterType.FROGGY]: 0.25, // 개굴군
  [CharacterType.PINK]: 0, // 핑크군
  [CharacterType.SWIM_GLASSES]: 0, // 물안경군
  [CharacterType.MASK]: 0, // 가면군
  [CharacterType.SLIME]: 0, // 슬라임
  [CharacterType.DINOSAUR]: 0, // 공룡이
  [CharacterType.PINK_SLIME]: 0, // 핑크슬라임
};

export const GAME_INIT_POSITION = [
  { x: -3.972, y: 3.703 },
  { x: 10.897, y: 4.033 },
  { x: 11.737, y: -5.216 },
  { x: 5.647, y: -5.126 },
  { x: -6.202, y: -5.126 },
  { x: -13.262, y: 4.213 },
  { x: -22.742, y: 3.653 },
  { x: -21.622, y: -6.936 },
  { x: -24.732, y: -6.886 },
  { x: -15.702, y: 6.863 },
  { x: -1.562, y: 6.173 },
  { x: -13.857, y: 6.073 },
  { x: 5.507, y: 11.963 },
  { x: -18.252, y: 12.453 },
  { x: -1.752, y: -7.376 },
  { x: 21.517, y: -4.826 },
  { x: 21.717, y: 3.223 },
  { x: 23.877, y: 10.683 },
  { x: 15.337, y: -12.296 },
  { x: -15.202, y: -4.736 },
];

export const DAILY_CARD_COUNT = 2;

export const ROLE_MEMBERS = {
  2: {
    [RoleType.TARGET]: 1,
    [RoleType.HITMAN]: 1,
  },
  3: {
    [RoleType.TARGET]: 1,
    [RoleType.HITMAN]: 1,
    [RoleType.PSYCHOPATH]: 1,
  },
  4: {
    [RoleType.TARGET]: 1,
    [RoleType.HITMAN]: 2,
    [RoleType.PSYCHOPATH]: 1,
  },
  5: {
    [RoleType.TARGET]: 1,
    [RoleType.HITMAN]: 2,
    [RoleType.BODYGUARD]: 1,
    [RoleType.PSYCHOPATH]: 1,
  },
  6: {
    [RoleType.TARGET]: 1,
    [RoleType.HITMAN]: 2,
    [RoleType.BODYGUARD]: 2,
    [RoleType.PSYCHOPATH]: 1,
  },
  7: {
    [RoleType.TARGET]: 1,
    [RoleType.HITMAN]: 3,
    [RoleType.BODYGUARD]: 2,
    [RoleType.PSYCHOPATH]: 1,
  },
} as const;
