import { cards } from '../cards';
import { Card } from '../cards/card';
import { CARD_TYPE, ROLE_TYPE } from '../constants/game';
import { CardData, CharacterData, CharacterPositionData } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { EventEmitter } from 'node:events';
import { CharacterStateInfo } from './character.state';
import { Result } from '../db/types';

export type CharacterPosition = MessageProps<CharacterPositionData>;
export type CardProps = MessageProps<CardData>;

const HP_MIN = 0;
const handler = {
  get: function (target: Character, key: string) {
    const prop = target[key];

    if (typeof prop === 'function') {
      return function (...args: any[]) {
        const result = prop.apply(target, args);
        target.emit(key, result);

        return result;
      };
    }

    return prop;
  },
};

export class Character extends EventEmitter {
  userId: string;
  hp: number;
  characterType: number;
  roleType: number;
  baseDefenseChance: number;
  handCards = new Map<CARD_TYPE, number>();
  stateInfo = new CharacterStateInfo(() => {});
  position: CharacterPosition;
  weapon: number;
  equips: number[];
  debuffs: number[];

  constructor({
    userId,
    hp,
    roleType,
    characterType,
    baseDefenseChance,
    position,
  }: {
    userId: string;
    hp: number;
    roleType: number;
    characterType: number;
    baseDefenseChance: number;
    position: CharacterPosition;
  }) {
    super();

    this.userId = userId;
    this.hp = hp;
    this.characterType = characterType;
    this.roleType = roleType;
    this.baseDefenseChance = baseDefenseChance;
    this.position = position;

    return new Proxy(this, handler);
  }

  toCharacterData(viewUserId: string): MessageProps<CharacterData> {
    return {
      characterType: this.characterType,
      roleType: viewUserId === this.userId || this.roleType === ROLE_TYPE.TARGET ? this.roleType : ROLE_TYPE.NONE,
      hp: this.hp,
      weapon: this.weapon,
      stateInfo: this.stateInfo,
      position: this.position,
      equips: this.equips,
      debuffs: this.debuffs,
      handCards: viewUserId === this.userId ? this.getHandCards() : [],
    };
  }

  useCard(card: CardProps): Result<Card> {
    if (!this.handCards.get(card.type)) return new Error(`character has no card type of ${card.type}`);

    this.loseCard(card);
    const cardInstance = cards[card.type];

    if (!cardInstance) return new Error(`card type of ${card.type} is not found`);

    return cardInstance;
  }

  getHandCards(): CardProps[] {
    return Array.from(this.handCards.entries()).map(([type, count]) => ({ type, count }));
  }

  takeDamage(amount: number) {
    if (this.isDefended()) return 0;

    this.hp = Math.max(HP_MIN, this.hp - amount);

    return amount;
  }

  isDefended() {
    return this.baseDefenseChance > Math.random();
  }

  acquireCard(card: CardProps) {
    this.handCards.set(card.type, (this.handCards.get(card.type) || 0) + card.count);

    return card;
  }

  loseCard(card: CardProps) {
    this.handCards.set(card.type, (this.handCards.get(card.type) || 0) - card.count);

    if (this.handCards.get(card.type) === 0) {
      this.handCards.delete(card.type);
    }

    return card;
  }

  getRandomCard() {
    const cardTypes = Array.from(this.handCards.keys());

    if (cardTypes.length === 0) return null;

    const randomCardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    const cardCount = this.handCards.get(randomCardType);

    if (!cardCount) return this.getRandomCard();

    this.loseCard({ type: randomCardType, count: 1 });

    return { type: randomCardType, count: 1 };
  }

  static recover(amount: number, character: Character) {
    character.hp += amount;

    return amount;
  }
}
