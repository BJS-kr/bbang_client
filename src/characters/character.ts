import { cards } from '../cards';
import { Card } from '../cards/card';
import { CARD_TYPE, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { CardData, CharacterData, CharacterStateData } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { EventEmitter } from 'node:events';

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
  hp: number;
  characterType: CHARACTER_TYPE;
  roleType: ROLE_TYPE;
  baseDefenseChance: number;
  handCards = new Map<CARD_TYPE, number>();
  state: CharacterStateData;
  weapon: number;
  equips: number[];
  debuffs: number[];

  constructor({
    hp,
    roleType,
    characterType,
    baseDefenseChance,
  }: {
    hp: number;
    roleType: ROLE_TYPE;
    characterType: CHARACTER_TYPE;
    baseDefenseChance: number;
  }) {
    super();

    this.hp = hp;
    this.characterType = characterType;
    this.roleType = roleType;
    this.baseDefenseChance = baseDefenseChance;

    return new Proxy(this, handler);
  }

  toCharacterData(): MessageProps<CharacterData> {
    return {
      characterType: this.characterType,
      roleType: this.roleType,
      hp: this.hp,
      weapon: this.weapon,
      equips: this.equips,
      debuffs: this.debuffs,
      handCards: this.getHandCards(),
    };
  }

  useCard(card: CardProps): Card<(...args: any) => boolean> | Error {
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
