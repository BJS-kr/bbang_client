import { Card } from '../../cards/class/card';
import { CARD_TYPE, CharacterState, ROLE_TYPE } from '../../constants/game';
import { CardData, CharacterData, CharacterPositionData } from '../../protobuf/compiled';
import { MessageProps } from '../../protobuf/props';
import { EventEmitter } from 'node:events';
import { CharacterStateInfo, OnStateTimeout } from '../character.state';
import { CharacterPositionInfo } from '../character.position';
import { Result } from '../../db/types';
import { log } from '../../utils/logger';
import { cards } from '../../cards/card.instance.index';

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
  useBBangCount: number;
  handCards = new Map<CARD_TYPE, number>();
  stateInfo = new CharacterStateInfo();
  positionInfo: CharacterPositionInfo;
  weapon: number = 0;
  equips = new Set<CARD_TYPE>();
  debuffs = new Set<CARD_TYPE>();

  constructor({
    userId,
    hp,
    roleType,
    characterType,
    baseDefenseChance,
  }: {
    userId: string;
    hp: number;
    roleType: number;
    characterType: number;
    baseDefenseChance: number;
  }) {
    super();

    this.userId = userId;
    this.hp = hp;
    this.characterType = characterType;
    this.roleType = roleType;
    this.baseDefenseChance = baseDefenseChance;
    this.positionInfo = new CharacterPositionInfo(userId);

    return new Proxy(this, handler);
  }

  toCharacterData(viewUserId: string): MessageProps<CharacterData> {
    const roleType = viewUserId === this.userId || this.roleType === ROLE_TYPE.TARGET ? this.roleType : ROLE_TYPE.NONE;
    log(`createUserDataView viewUserId: ${viewUserId} this.userId: ${this.userId}`);
    return {
      characterType: Number(this.characterType),
      roleType,
      hp: this.hp,
      weapon: this.weapon,
      stateInfo: this.stateInfo,
      equips: Array.from(this.equips),
      debuffs: Array.from(this.debuffs),
      handCards: viewUserId === this.userId ? this.getHandCards() : [],
      handCardsCount: this.getTotalHandCardCount(),
    };
  }

  setPosition({ x, y }: { x: number; y: number }) {
    this.positionInfo.userId = this.userId;
    this.positionInfo.x = x;
    this.positionInfo.y = y;
  }

  getMaxBBangCount() {
    return this.weapon === CARD_TYPE.SNIPER_GUN ? 2 : this.weapon === CARD_TYPE.HAND_GUN ? Infinity : 1;
  }

  acquireBBangCount() {
    this.useBBangCount++;
  }

  getBBangDamage() {
    return this.weapon === CARD_TYPE.DESERT_EAGLE ? 2 : 1;
  }

  drawCard(card: CardProps): Result<Card> {
    const err = this.loseCard(card);

    if (err instanceof Error) return err;

    const cardInstance = cards[card.type];

    if (!cardInstance) return new Error(`card type of ${card.type} is not found`);

    return cardInstance;
  }

  getHandCards(): CardProps[] {
    return Array.from(this.handCards.entries()).map(([type, count]) => ({ type, count }));
  }

  getTotalHandCardCount(): number {
    return Array.from(this.handCards.values()).reduce((sum, count) => sum + count, 0);
  }

  takeDamage(amount: number) {
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
    const remain = (this.handCards.get(card.type) || 0) - card.count;

    if (remain < 0) {
      return new Error(`character has no card type of ${card.type}`);
    }

    this.handCards.set(card.type, remain < 0 ? 0 : remain);

    if (this.handCards.get(card.type) === 0) {
      this.handCards.delete(card.type);
    }

    return card;
  }

  loseRandomCards(count: number = 1) {
    const cardTypes = Array.from(this.handCards.keys());

    if (cardTypes.length === 0) return null;

    const totalCards = Array.from(this.handCards.values()).reduce((sum, curr) => sum + curr, 0);
    if (totalCards < count) return null;

    let remainingCount = count;
    while (remainingCount > 0) {
      const randomIndex = Math.floor(Math.random() * cardTypes.length);
      const randomCardType = cardTypes[randomIndex];
      const cardCount = this.handCards.get(randomCardType) || 0;

      if (cardCount === 1) {
        this.loseCard({ type: randomCardType, count: 1 });
        cardTypes.splice(randomIndex, 1);
        remainingCount -= 1;
        continue;
      }

      const loseCount = Math.min(remainingCount, cardCount);
      this.loseCard({ type: randomCardType, count: loseCount });
      remainingCount -= loseCount;
    }

    return true;
  }

  getRandomCard(): CardProps | null {
    const cardTypes = Array.from(this.handCards.keys());

    if (cardTypes.length === 0) return null;

    const randomCardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    const cardCount = this.handCards.get(randomCardType);

    if (!cardCount) return this.getRandomCard();

    this.loseCard({ type: randomCardType, count: 1 });

    return { type: randomCardType, count: 1 };
  }

  isDead() {
    return this.hp <= 0;
  }

  static recover(amount: number, character: Character) {
    character.hp += amount;

    return amount;
  }
}