import { CharacterPositionData } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';

export class CharacterPositionInfo {
  userId: string;
  x: number;
  y: number;
  isDirty: boolean;

  constructor(userId: string) {
    this.userId = userId;
    this.x = 0;
    this.y = 0;
    this.isDirty = false;
  }

  toPositionData(): MessageProps<CharacterPositionData> {
    return {
      id: this.userId,
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
