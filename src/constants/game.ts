export enum CARD_TYPE {
  BBANG = 1,
  BIG_BBANG = 2,
  SHIELD = 3,
  VACCINE = 4,
  CALL_119 = 5,
  DEATH_MATCH = 6,
  GUERRILLA = 7,
  ABSORB = 8,
  HALLUCINATION = 9,
  FLEA_MARKET = 10,
  MATURED_SAVINGS = 11,
  WIN_LOTTERY = 12,
  SNIPER_GUN = 13,
  HAND_GUN = 14,
  DESERT_EAGLE = 15,
  AUTO_RIFLE = 16,
  LASER_POINTER = 17,
  RADAR = 18,
  AUTO_SHIELD = 19,
  STEALTH_SUIT = 20,
  CONTAINMENT_UNIT = 21,
  SATELLITE_TARGET = 22,
  BOMB = 23,
}

export enum CHARACTER_TYPE {
  NONE = 0,
  RED = 1, // 빨강이
  BLUE = 2, // 파랑이
  SHARK = 3, // 상어군
  KNIGHT = 4, // 기사군
  MALANG = 5, // 말랑이
  DINO = 6, // 다이노
  FROGGY = 7, // 개굴군
  PINK = 8, // 핑크군
  SWIM_GLASSES = 9, // 물안경군
  MASK = 10, // 가면군
  SLIME = 11, // 슬라임
  DINOSAUR = 12, // 공룡이
  PINK_SLIME = 13, // 핑크슬라임
}

export enum ROLE_TYPE {
  NONE = 0,
  TARGET = 1,
  BODYGUARD = 2,
  HITMAN = 3,
  PSYCHOPATH = 4,
}

export enum ROOM_STATE_TYPE {
  WAIT = 0,
  PREPARE = 1,
  INGAME = 2,
}

export enum PHASE_TYPE {
  NONE = 0,
  DAY = 1,
  EVENING = 2,
  END = 3,
}

export const CHARACTER_HP = {
  [CHARACTER_TYPE.RED]: 4, // 빨강이
  [CHARACTER_TYPE.BLUE]: 4, // 파랑이
  [CHARACTER_TYPE.SHARK]: 4, // 상어군
  [CHARACTER_TYPE.KNIGHT]: 4, // 기사군
  [CHARACTER_TYPE.MALANG]: 4, // 말랑이
  [CHARACTER_TYPE.DINO]: 4, // 다이노
  [CHARACTER_TYPE.FROGGY]: 4, // 개굴군
  [CHARACTER_TYPE.PINK]: 4, // 핑크군
  [CHARACTER_TYPE.SWIM_GLASSES]: 4, // 물안경군
  [CHARACTER_TYPE.MASK]: 4, // 가면군
  [CHARACTER_TYPE.SLIME]: 4, // 슬라임
  [CHARACTER_TYPE.DINOSAUR]: 3, // 공룡이
  [CHARACTER_TYPE.PINK_SLIME]: 3, // 핑크슬라임
};

export const CHARACTER_BASE_DEFENSE_CHANCE = {
  [CHARACTER_TYPE.RED]: 0, // 빨강이
  [CHARACTER_TYPE.BLUE]: 0, // 파랑이
  [CHARACTER_TYPE.SHARK]: 0, // 상어군
  [CHARACTER_TYPE.KNIGHT]: 0, // 기사군
  [CHARACTER_TYPE.MALANG]: 0, // 말랑이
  [CHARACTER_TYPE.DINO]: 0, // 다이노
  [CHARACTER_TYPE.FROGGY]: 0.25, // 개굴군
  [CHARACTER_TYPE.PINK]: 0, // 핑크군
  [CHARACTER_TYPE.SWIM_GLASSES]: 0, // 물안경군
  [CHARACTER_TYPE.MASK]: 0, // 가면군
  [CHARACTER_TYPE.SLIME]: 0, // 슬라임
  [CHARACTER_TYPE.DINOSAUR]: 0, // 공룡이
  [CHARACTER_TYPE.PINK_SLIME]: 0, // 핑크슬라임
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

export enum CharacterState {
  NONE = 0,
  BBANG_SHOOTER = 1, // 빵야 시전자
  BBANG_TARGET = 2, // 빵야 대상 (쉴드 사용가능 상태)
  DEATH_MATCH = 3, // 현피 중 자신의 턴이 아닐 때
  DEATH_MATCH_TURN = 4, // 현피 중 자신의 턴
  FLEA_MARKET_TURN = 5, // 플리마켓 자신의 턴
  FLEA_MARKET_WAIT = 6, // 플리마켓 턴 대기 상태
  GUERRILLA_SHOOTER = 7, // 게릴라 시전자
  GUERRILLA_TARGET = 8, // 게릴라 대상
  BIG_BBANG_SHOOTER = 9, // 난사 시전자
  BIG_BBANG_TARGET = 10, // 난사 대상
  ABSORBING = 11, // 흡수 중
  ABSORB_TARGET = 12, // 흡수 대상
  HALLUCINATING = 13, // 신기루 중
  HALLUCINATION_TARGET = 14, // 신기루 대상
}

export const DAILY_CARD_COUNT = 2;

export enum WarningType {
  NO_WARNING = 0,
  BOMB = 1,
}
