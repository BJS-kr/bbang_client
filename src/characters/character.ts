import { CARD_TYPE, CHARACTER_TYPE, ROLE_TYPE } from '../constants/game';
import { CardData, CharacterStateData } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { EventEmitter } from 'node:events';

export type Card = MessageProps<CardData>;

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
  invisibleFrom = new Set<Character>();

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

  useCard(card: CardData) {
    // TODO 카드 사용 로직 구현

    return card;
  }

  getHandCards(): MessageProps<CardData>[] {
    return Array.from(this.handCards.entries()).map(([type, count]) => ({ type, count }));
  }

  takeDamage(amount: number) {
    if (this.isDefended()) return 0;

    this.hp = Math.max(HP_MIN, this.hp - amount);

    return amount;
  }

  isDefended() {
    return this.baseDefenseChance > Math.random() * 100;
  }

  acquireCard(card: Card) {
    this.handCards.set(card.type, (this.handCards.get(card.type) || 0) + card.count);

    return card;
  }

  loseCard(card: Card) {
    this.handCards.set(card.type, (this.handCards.get(card.type) || 0) - card.count);

    if (this.handCards.get(card.type) === 0) {
      this.handCards.delete(card.type);
    }

    return card;
  }

  addInvisibleFrom(characters: Character[]) {
    characters.forEach((character) => {
      this.invisibleFrom.add(character);
    });

    return characters;
  }

  removeInvisibleFrom(characters: Character[]) {
    characters.forEach((character) => {
      this.invisibleFrom.delete(character);
    });

    return characters;
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
