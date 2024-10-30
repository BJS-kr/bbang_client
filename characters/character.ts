import { CARD_TYPE, CHARACTER_TYPE } from '../src/constants/game';
import { CardData } from '../src/protobuf/compiled';
import { MessageProps } from '../src/protobuf/props';
import { EventEmitter } from 'node:events';

export type Card = MessageProps<CardData>;

const DEFENSE_CHANCE_MAX = 100;
const DAMAGE_MULTIPLIER_MIN = 1;
const DAMAGE_MULTIPLIER_MAX = 10;
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
  instanceId: string;
  name: string;
  hp: number;
  maxHp: number;
  characterType: CHARACTER_TYPE;
  isLeft: boolean;
  baseDefenseChance: number;
  defenseChance: number;
  amountForDefense: number;
  bangPerDay: number;
  todayBangCount = 0;
  damageMultiplier = 1;
  cards = new Map<CARD_TYPE, number>();
  invisibleFrom = new Set<Character>();

  constructor({
    instanceId,
    name,
    hp,
    characterType,
    isLeft,
    baseDefenseChance,
    amountForDefense,
    bangPerDay,
  }: {
    instanceId: string;
    name: string;
    hp: number;
    characterType: CHARACTER_TYPE;
    isLeft: boolean;
    baseDefenseChance: number;
    amountForDefense: number;
    bangPerDay: number;
  }) {
    super();

    this.instanceId = instanceId;
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
    this.characterType = characterType;
    this.isLeft = isLeft;
    this.baseDefenseChance = baseDefenseChance;
    this.defenseChance = baseDefenseChance;
    this.amountForDefense = amountForDefense;
    this.bangPerDay = bangPerDay;

    return new Proxy(this, handler);
  }

  useCard(card: CardData) {
    // TODO 카드 사용 로직 구현

    return card;
  }

  takeDamage(amount: number) {
    if (this.isDefended()) return;

    const damage = amount * this.damageMultiplier;

    this.hp = Math.max(HP_MIN, this.hp - damage);

    return damage;
  }

  isDefended() {
    return this.defenseChance > Math.random() * 100;
  }

  acquireCard(card: Card) {
    this.cards.set(card.type, (this.cards.get(card.type) || 0) + card.count);

    return card;
  }

  loseCard(card: Card) {
    this.cards.set(card.type, (this.cards.get(card.type) || 0) - card.count);

    if (this.cards.get(card.type) === 0) {
      this.cards.delete(card.type);
    }

    return card;
  }

  increaseDefenseChance(chance: number) {
    this.defenseChance = Math.min(DEFENSE_CHANCE_MAX, this.defenseChance + chance);

    return chance;
  }

  decreaseDefenseChance(chance: number) {
    this.defenseChance = Math.max(this.baseDefenseChance, this.defenseChance - chance);

    return chance;
  }

  increaseDamageMultiplier(amount: number) {
    this.damageMultiplier = Math.max(DAMAGE_MULTIPLIER_MAX, this.damageMultiplier + amount);

    return amount;
  }

  decreaseDamageMultiplier(amount: number) {
    this.damageMultiplier = Math.min(DAMAGE_MULTIPLIER_MIN, this.damageMultiplier - amount);

    return amount;
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

  addBangCount(count: number) {
    this.todayBangCount += count;

    return count;
  }

  resetBangCount() {
    this.todayBangCount = 0;
  }

  setAmountForDefense(amount: number) {
    this.amountForDefense = amount;

    return amount;
  }

  getRandomCard() {
    const cardTypes = Array.from(this.cards.keys());

    if (cardTypes.length === 0) return null;

    const randomCardType = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    const cardCount = this.cards.get(randomCardType);

    if (!cardCount) return this.getRandomCard();

    this.loseCard({ type: randomCardType, count: 1 });

    return { type: randomCardType, count: 1 };
  }

  static recover(amount: number, character: Character) {
    character.hp = Math.min(character.maxHp, character.hp + amount);

    return amount;
  }
}
