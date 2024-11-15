import test from 'node:test';
import assert from 'node:assert/strict';
import { Context } from '../events/types';
import { User } from '../users/types';
import { Rooms } from './types';
import { log } from '../utils/logger';

const onPhaseChange = (phaseType) => {
  log(phaseType);
};
const ctx: Context = { userId: BigInt(0), roomId: 0 };

test('Rooms Test', async (t) => {
  await t.test('create room', () => {
    const rooms = new Rooms();
    const roomId = rooms.createRoomId();
    const result = rooms.create(roomId, 'test', 'test', 10);
    const room = rooms.getRoom(roomId);

    if (!room) {
      throw new Error('Room not found');
    }

    assert.equal(result, true);
    assert.equal(room.ownerId, 'test');
    assert.equal(room.name, 'test');
    assert.equal(room.maxUserNum, 10);
  });

  await t.test('join room', () => {
    const rooms = new Rooms();
    const roomId = rooms.createRoomId();
    const result = rooms.create(roomId, 'test', 'test', 10);
    const joinResult = rooms.join(roomId, new User(BigInt(0), 'test', null as any), ctx);
    const room = rooms.getRoom(roomId);

    if (!room) {
      throw new Error('Room not found');
    }

    assert.equal(result, true);
    assert.equal(joinResult, true);
    assert.equal(room.users.length, 1);
    assert.equal(room.users[0].id, 'test');
  });

  await t.test('leave room', () => {
    const rooms = new Rooms();
    const roomId = rooms.createRoomId();
    const result = rooms.create(roomId, 'test', 'test', 10);
    const joinResult = rooms.join(roomId, new User(BigInt(0), 'test', null as any), ctx);
    const leaveResult = rooms.quit(roomId, BigInt(0), ctx);
    const room = rooms.getRoom(roomId);

    assert.equal(result, true);
    assert.equal(joinResult, true);
    assert.equal(leaveResult, true);
    assert.equal(room, null);
  });
});
