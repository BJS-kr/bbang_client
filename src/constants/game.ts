export const CARD_TYPE = {
  CAD00001: 1,
  CAD00002: 2,
  CAD00003: 3,
  CAD00004: 4,
  CAD00005: 5,
  CAD00006: 6,
  CAD00007: 7,
  CAD00008: 8,
  CAD00009: 9,
  CAD00010: 10,
  CAD00011: 11,
  CAD00012: 12,
  CAD00013: 13,
  CAD00014: 14,
  CAD00015: 15,
  CAD00016: 16,
  CAD00017: 17,
  CAD00018: 18,
  CAD00019: 19,
  CAD00020: 20,
  CAD00021: 21,
  CAD00022: 22,
  CAD00023: 23,
} as const;

export const CHARACTER_TYPE = {
  NONE: 0,
  CHA00001: 1, // 르탄이
  CHA00002: 2, // 우탄이
  CHA00003: 3, // 상어군
  CHA00004: 4, // 기사군
  CHA00005: 5, // 말랑이
  CHA00006: 6, // 다이노
  CHA00007: 7, // 개굴군
  CHA00008: 8, // 핑크군
  CHA00009: 9, // 물안경군
  CHA00010: 10, // 가면군
  CHA00011: 11, // 슬라임
  CHA00012: 12, // 미정
  CHA00013: 13, // 미정
} as const;

export const ROLE_TYPE = {
  NONE: 0,
  TARGET: 1,
  BODYGUARD: 2,
  HITMAN: 3,
  PSYCHOPATH: 4,
} as const;

export const ROOM_STATE_TYPE = {
  WAIT: 0,
  PREPARE: 1,
  INGAME: 2,
} as const;

export const PHASE_TYPE = {
  NONE: 0,
  DAY: 1,
  EVENING: 2,
  END: 3,
} as const;

export const USER_STATE = {
  NONE: 0,
  BBANG_SHOOTER: 1, // 빵야 시전자
  BBANG_TARGET: 2, // 빵야 대상 (쉴드 사용가능 상태)
  DEATH_MATCH: 3, // 현피 중 자신의 턴이 아닐 때
  DEATH_MATCH_TURN: 4, // 현피 중 자신의 턴
} as const;
