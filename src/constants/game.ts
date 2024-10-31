export enum CARD_TYPE {
  CAD00001 = 1,
  CAD00002 = 2,
  CAD00003 = 3,
  CAD00004 = 4,
  CAD00005 = 5,
  CAD00006 = 6,
  CAD00007 = 7,
  CAD00008 = 8,
  CAD00009 = 9,
  CAD00010 = 10,
  CAD00011 = 11,
  CAD00012 = 12,
  CAD00013 = 13,
  CAD00014 = 14,
  CAD00015 = 15,
  CAD00016 = 16,
  CAD00017 = 17,
  CAD00018 = 18,
  CAD00019 = 19,
  CAD00020 = 20,
  CAD00021 = 21,
  CAD00022 = 22,
  CAD00023 = 23,
}

export enum CHARACTER_TYPE {
  NONE = 0,
  CHA00001 = 1, // 빨강이
  CHA00002 = 2, // 파랑이
  CHA00003 = 3, // 상어군
  CHA00004 = 4, // 기사군
  CHA00005 = 5, // 말랑이
  CHA00006 = 6, // 다이노
  CHA00007 = 7, // 개굴군
  CHA00008 = 8, // 핑크군
  CHA00009 = 9, // 물안경군
  CHA00010 = 10, // 가면군
  CHA00011 = 11, // 슬라임
  CHA00012 = 12, // 공룡이
  CHA00013 = 13, // 핑크슬라임
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

export enum USER_STATE {
  NONE = 0,
  BBANG_SHOOTER = 1, // 빵야 시전자
  BBANG_TARGET = 2, // 빵야 대상 (쉴드 사용가능 상태)
  DEATH_MATCH = 3, // 현피 중 자신의 턴이 아닐 때
  DEATH_MATCH_TURN = 4, // 현피 중 자신의 턴
}

export const CHARACTER_HP = {
  [CHARACTER_TYPE.CHA00001]: 4, // 르탄이
  [CHARACTER_TYPE.CHA00002]: 4, // 우탄이
  [CHARACTER_TYPE.CHA00003]: 4, // 상어군
  [CHARACTER_TYPE.CHA00004]: 4, // 기사군
  [CHARACTER_TYPE.CHA00005]: 4, // 말랑이
  [CHARACTER_TYPE.CHA00006]: 4, // 다이노
  [CHARACTER_TYPE.CHA00007]: 4, // 개굴군
  [CHARACTER_TYPE.CHA00008]: 4, // 핑크군
  [CHARACTER_TYPE.CHA00009]: 4, // 물안경군
  [CHARACTER_TYPE.CHA00010]: 4, // 가면군
  [CHARACTER_TYPE.CHA00011]: 4, // 슬라임
  [CHARACTER_TYPE.CHA00012]: 3, // 공룡이
  [CHARACTER_TYPE.CHA00013]: 3, // 핑크슬라임
};

export const CHARACTER_BASE_DEFENSE_CHANCE = {
  [CHARACTER_TYPE.CHA00001]: 0, // 르탄이
  [CHARACTER_TYPE.CHA00002]: 0, // 우탄이
  [CHARACTER_TYPE.CHA00003]: 0, // 상어군
  [CHARACTER_TYPE.CHA00004]: 0, // 기사군
  [CHARACTER_TYPE.CHA00005]: 0, // 말랑이
  [CHARACTER_TYPE.CHA00006]: 0, // 다이노
  [CHARACTER_TYPE.CHA00007]: 0.25, // 개굴군
  [CHARACTER_TYPE.CHA00008]: 0, // 핑크군
  [CHARACTER_TYPE.CHA00009]: 0, // 물안경군
  [CHARACTER_TYPE.CHA00010]: 0, // 가면군
  [CHARACTER_TYPE.CHA00011]: 0, // 슬라임
  [CHARACTER_TYPE.CHA00012]: 0, // 공룡이
  [CHARACTER_TYPE.CHA00013]: 0, // 핑크슬라임
};
