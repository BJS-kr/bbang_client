import { Rooms } from './rooms';
import test from 'node:test';
import assert from 'node:assert/strict';
import { Context } from '../events/types';
import { User } from '../users/types';

const onPhaseChange = (phaseType) => {
  console.log(phaseType);
};
const ctx: Context = { userId: '', roomId: 0 };

test('Rooms Test', async (t) => {
  await t.test('create room', () => {
    const rooms = new Rooms();
    const roomId = rooms.createRoomId();
    const result = rooms.createRoom(roomId, 'test', 'test', 10, onPhaseChange);
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
    const result = rooms.createRoom(roomId, 'test', 'test', 10, onPhaseChange);
    const joinResult = rooms.joinRoom(roomId, new User('test', 'test', null as any), ctx);
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
    const result = rooms.createRoom(roomId, 'test', 'test', 10, onPhaseChange);
    const joinResult = rooms.joinRoom(roomId, new User('test', 'test', null as any), ctx);
    const leaveResult = rooms.leaveRoom(roomId, 'test', ctx);
    const room = rooms.getRoom(roomId);

    assert.equal(result, true);
    assert.equal(joinResult, true);
    assert.equal(leaveResult, true);
    assert.equal(room, null);
  });
});
