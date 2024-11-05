import { CharacterPositionData } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';

export class CharacterPositionInfo {
  userId: string;
  x: number;
  y: number;

  constructor(userId: string) {
    this.userId = userId;
    this.x = 0;
    this.y = 0;
  }

  setPosition({ x, y }: { x: number; y: number }) {
    this.x = x;
    this.y = y;
  }

  toPositionData(): MessageProps<CharacterPositionData> {
    return {
      id: this.userId,
      x: this.x,
      y: this.y,
    };
  }
}
