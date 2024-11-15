import { CharacterPositionData } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';

export class CharacterPositionInfo {
  userId: bigint;
  x: number;
  y: number;
  isDirty: boolean;

  constructor(userId: bigint) {
    this.userId = userId;
    this.x = 0;
    this.y = 0;
    this.isDirty = false;
  }

  toPositionData(): MessageProps<CharacterPositionData> {
    return {
      id: Number(this.userId),
      x: this.x,
      y: this.y,
    };
  }

  setPosition(x: number, y: number) {
    if (this.x === x || this.y === y) {
      return;
    }

    this.x = x;
    this.y = y;
    this.isDirty = true;
  }
}
