import { CARD_COUNTS, GAME_INIT_POSITION, ROLE_MEMBERS } from '../constants/game';
import { PACKET_TYPE } from '../constants/packetType';
import {
  CardType,
  CharacterStateType,
  CharacterType,
  GlobalFailCode,
  RoleType,
  RoomStateType,
  S2CFleaMarketNotification,
  S2CFleaMarketPickResponse,
  S2CGamePrepareNotification,
  S2CGamePrepareResponse,
  S2CGameStartNotification,
  S2CGameStartResponse,
  S2CReactionResponse,
  S2CUserUpdateNotification,
} from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { writePayload } from '../protobuf/writePayload';
import { rooms } from '../rooms/rooms';
import { Context } from '../events/types';
import { session } from '../users/session';
import { createCharacter } from '../characters/createCharacter';
import { log, error } from '../utils/logger';
import { UserUpdateNotification } from '../cards/types';
import { User } from '../users/types';
// TODO
const TARGET_CARD_BONUS = 1;

export const gamePrepareRequestHandler = async (socket, version, sequence, gamePrepareRequest, ctx: Context) => {
  const user = session.getUser(ctx.userId);
  if (!user) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  // TODO || room.users.length < 4
  if (room.state !== RoomStateType.WAIT) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  if (user.id !== room.ownerId) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  if (!(room.users.length in ROLE_MEMBERS)) {
    return writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_ROOM_STATE,
    } satisfies MessageProps<S2CGamePrepareResponse>);
  }

  const roles: number[] = [];
  const roleMembers = ROLE_MEMBERS[room.users.length];
  Object.entries(roleMembers).forEach(([role, count]: [string, number]) => {
    for (let i = 0; i < count; i++) {
      roles.push(Number(role));
    }
  });

  // 역할, 초기 위치, 캐릭터 셔플
  const shuffleRoles = roles.sort(() => Math.random() - 0.5);
  const suhfflePositions = [...GAME_INIT_POSITION].sort(() => Math.random() - 0.5);
  const shuffleCharacters = Object.values(CharacterType)
    .filter((type) => typeof type === 'number' && type !== CharacterType.NONE_CHARACTER)
    .sort(() => Math.random() - 0.5);

  // 카드 셔플
  room.shuffleCardTypes = Object.entries(CARD_COUNTS)
    .flatMap(([cardType, count]) => Array(count).fill(Number(cardType)))
    .filter((type) => type !== CardType.NONE)
    .sort(() => Math.random() - 0.5);

  // 역할, 캐릭터, 초기 위치 부여
  for (let i = 0; i < room.users.length; i++) {
    const characterType = shuffleCharacters[i];
    const roleType = shuffleRoles[i];

    // ROLE_TYPE.NONE || CHARACTER_TYPE.NONE || falsy
    if (!characterType || !roleType) {
      throw new Error('characterType or roleType is not defined');
    }

    room.users[i].character = createCharacter({
      userId: room.users[i].id,
      characterType,
      roleType,
      gameEvents: room.gameEvents,
      room,
    });
    room.users[i].character.setPosition(suhfflePositions[i]);
  }

  // 상태 변경
  room.state = RoomStateType.PREPARE;

  // 게임 준비 응답
  const responsePayload: MessageProps<S2CGamePrepareResponse> = {
    success: true,
    failCode: GlobalFailCode.NONE_FAILCODE,
  };
  writePayload(socket, PACKET_TYPE.GAME_PREPARE_RESPONSE, version, sequence, responsePayload);

  // 게임 준비 알림
  room.users.forEach((user) => {
    writePayload(user.socket, PACKET_TYPE.GAME_PREPARE_NOTIFICATION, version, 0, {
      room: {
        id: ctx.roomId,
        name: room.name,
        ownerId: Number(room.ownerId),
        maxUserNum: room.maxUserNum,
        state: room.state,
        users: createUserDataView(user, room.users),
      },
    } satisfies MessageProps<S2CGamePrepareNotification>);
  });

  log(`[GamePrepare] roomId: ${ctx.roomId}`);
};

export const gameStartRequestHandler = async (socket, version, sequence, gameStartRequest, ctx: Context) => {
  const user = session.getUser(ctx.userId);
  if (!user) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.AUTHENTICATION_FAILED,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.ROOM_NOT_FOUND,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  if (room.state !== RoomStateType.PREPARE) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_ROOM_STATE,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  if (user.id !== room.ownerId) {
    return writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CGameStartResponse>);
  }

  room.users.forEach((user) => {
    user.character.handCards.clear();

    let initCardCount = user.character.hp;
    if (user.character.roleType === RoleType.TARGET) {
      initCardCount += TARGET_CARD_BONUS;
    }

    for (let i = 0; i < initCardCount; i++) {
      const card = { type: room.pickCardType(), count: 1 };
      user.character.acquireCard(card);
    }

    // 버그 테스트용
    user.character.handCards = new Map([
      [CardType.GUERRILLA, 2],
      [CardType.SHIELD, 2],
      [CardType.BIG_BBANG, 2],
      [CardType.BBANG, 2],
    ]);
  });

  room.state = RoomStateType.INGAME;
  room.setTimer();

  // 게임 시작 응답
  writePayload(socket, PACKET_TYPE.GAME_START_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE_FAILCODE,
  } satisfies MessageProps<S2CGameStartResponse>);

  // 게임 시작 알림
  room.users.forEach((user) => {
    writePayload(user.socket, PACKET_TYPE.GAME_START_NOTIFICATION, version, 0, {
      gameState: room.gameState.toGameStateData(),
      users: createUserDataView(user, room.users),
      characterPositions: room.users.map((user) => user.character.positionInfo.toPositionData()),
    } satisfies MessageProps<S2CGameStartNotification>);
  });

  log(`[GameStart] roomId: ${ctx.roomId}`);
};

export const positionUpdateRequestHandler = async (socket, version, sequence, positionUpdateRequest, ctx: Context) => {
  const { x, y } = positionUpdateRequest;
  const user = session.getUser(ctx.userId);
  if (!user) {
    error(`[positionUpdateRequestHandler] Cannot Find User.`);
    return;
  }

  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
    error(`[positionUpdateRequestHandler] Cannot Find Room.`);
    return;
  }

  if (room.state !== RoomStateType.INGAME) {
    error(`[positionUpdateRequestHandler] Invalid Room State.`);
    return;
  }

  const roomUser = room.users.find((user) => user.id === ctx.userId);
  if (!roomUser) {
    error(`[positionUpdateRequestHandler] Invalid Room User.`);
    return;
  }

  if (roomUser.character.stateInfo.state !== CharacterStateType.NONE_CHARACTER_STATE) {
    error(`[positionUpdateRequestHandler] Invalid Character State.`);
    return;
  }

  roomUser.character.setPosition({ x, y });
};

export const reactionHandler = async (socket, version, sequence, reactionRequest, ctx: Context) => {
  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
    return writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.ROOM_NOT_FOUND,
    } satisfies MessageProps<S2CReactionResponse>);
  }

  const user = room.getUser(ctx.userId);
  if (!user) {
    return writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies MessageProps<S2CReactionResponse>);
  }

  if (user.character.stateInfo.state === CharacterStateType.NONE_CHARACTER_STATE) {
    return writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_STATE_ERROR,
    } satisfies MessageProps<S2CReactionResponse>);
  }

  switch (user.character.stateInfo.state) {
    case CharacterStateType.FLEA_MARKET_TURN:
      const remainCardTypes = room.fleaMarketCards.map((_, index) => index).filter((index) => !room.pickFleaMarketIndex.includes(index));
      if (remainCardTypes.length <= 0) {
        return writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
          success: false,
          failCode: GlobalFailCode.INVALID_REQUEST,
        } satisfies MessageProps<S2CReactionResponse>);
      }

      const randomIndex = remainCardTypes[Math.floor(Math.random() * remainCardTypes.length)];
      user.character.acquireCard({ type: room.fleaMarketCards[randomIndex], count: 1 });
      room.pickFleaMarketIndex.push(randomIndex);

      room.broadcast(PACKET_TYPE.FLEA_MARKET_NOTIFICATION, {
        cardTypes: room.fleaMarketCards,
        pickIndex: room.pickFleaMarketIndex,
      } satisfies MessageProps<S2CFleaMarketNotification>);

      user.character.stateInfo.setState(user.id, CharacterStateType.FLEA_MARKET_WAIT, null);
      break;

    default:
      user.character.stateInfo.react(CharacterStateType.NONE_CHARACTER_STATE);
      break;
  }

  writePayload(socket, PACKET_TYPE.REACTION_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE_FAILCODE,
  } satisfies MessageProps<S2CReactionResponse>);

  room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: room.users.map((user) => user.toUserData(user.id)),
  } satisfies MessageProps<S2CUserUpdateNotification>);
};

export const fleaMarketPickHandler = async (socket, version, sequence, fleaMarketPickRequest, ctx: Context) => {
  const room = rooms.getRoom(ctx.roomId);
  if (!room) {
    return writePayload(socket, PACKET_TYPE.FLEA_MARKET_PICK_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.ROOM_NOT_FOUND,
    } satisfies MessageProps<S2CFleaMarketPickResponse>);
  }

  const user = room.getUser(ctx.userId);
  if (!user) {
    return writePayload(socket, PACKET_TYPE.FLEA_MARKET_PICK_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_NOT_FOUND,
    } satisfies MessageProps<S2CFleaMarketPickResponse>);
  }

  if (user.character.stateInfo.state !== CharacterStateType.FLEA_MARKET_TURN) {
    return writePayload(socket, PACKET_TYPE.FLEA_MARKET_PICK_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.CHARACTER_STATE_ERROR,
    } satisfies MessageProps<S2CFleaMarketPickResponse>);
  }

  const { pickIndex } = fleaMarketPickRequest;
  if (!room.fleaMarketCards[pickIndex] || room.pickFleaMarketIndex.includes(pickIndex)) {
    return writePayload(socket, PACKET_TYPE.FLEA_MARKET_PICK_RESPONSE, version, sequence, {
      success: false,
      failCode: GlobalFailCode.INVALID_REQUEST,
    } satisfies MessageProps<S2CFleaMarketPickResponse>);
  }

  user.character.stateInfo.setState(user.id, CharacterStateType.FLEA_MARKET_WAIT, null);
  user.character.acquireCard({ type: room.fleaMarketCards[pickIndex], count: 1 });
  room.pickFleaMarketIndex.push(pickIndex);

  writePayload(socket, PACKET_TYPE.FLEA_MARKET_PICK_RESPONSE, version, sequence, {
    success: true,
    failCode: GlobalFailCode.NONE_FAILCODE,
  } satisfies MessageProps<S2CFleaMarketPickResponse>);

  room.broadcast(PACKET_TYPE.FLEA_MARKET_NOTIFICATION, {
    cardTypes: room.fleaMarketCards,
    pickIndex: room.pickFleaMarketIndex,
  } satisfies MessageProps<S2CFleaMarketNotification>);

  room.broadcast(PACKET_TYPE.USER_UPDATE_NOTIFICATION, {
    user: room.users.map((user) => user.toUserData(user.id)),
  } satisfies MessageProps<UserUpdateNotification>);
};

function createUserDataView(user: User, userDatas: User[]) {
  log(`createUserDataView userId: ${user.id}`);
  const result = userDatas.map((userData) => ({
    id: Number(userData.id),
    nickname: userData.nickname,
    character: userData.character.toCharacterData(user.id),
  }));
  return result;
}
