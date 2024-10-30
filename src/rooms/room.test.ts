import { Rooms } from './rooms';
import test from 'node:test';
import assert from 'node:assert/strict';

test('Rooms Test', async (t) => {
  await t.test('create room', () => {
    const rooms = new Rooms();
    const roomId = rooms.createRoomId();
    const result = rooms.createRoom(roomId, 'test', 'test', 10);
    const room = rooms.getRoom(roomId, 'test');

    if (!room) {
      throw new Error('Room not found');
    }

    assert.equal(result, true);
    assert.equal(room.id, roomId);
    assert.equal(room.ownerId, 'test');
    assert.equal(room.name, 'test');
    assert.equal(room.maxUserNum, 10);
  });

  await t.test('join room', () => {
    const rooms = new Rooms();
    const roomId = rooms.createRoomId();
    const result = rooms.createRoom(roomId, 'test', 'test', 10);
    const joinResult = rooms.joinRoom(roomId, 'test', 'test');
    const room = rooms.getRoom(roomId, 'test');

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
    const result = rooms.createRoom(roomId, 'test', 'test', 10);
    const joinResult = rooms.joinRoom(roomId, 'test', 'test');
    const leaveResult = rooms.leaveRoom(roomId, 'test');
    const room = rooms.getRoom(roomId, 'test');

    assert.equal(result, true);
    assert.equal(joinResult, true);
    assert.equal(leaveResult, true);
    assert.equal(room, null);
  });
});
