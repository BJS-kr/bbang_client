import { CARD_TYPE, CHARACTER_TYPE } from '../src/constants/game';
import { CardData } from '../src/protobuf/compiled';
import { MessageProps } from '../src/protobuf/props';
import { EventEmitter } from 'node:events';

export type Card = MessageProps<CardData>;

const DEFENSE_CHANCE_MAX = 100;
const DAMAGE_MULTIPLIER_MIN = 1;
const DAMAGE_MULTIPLIER_MAX = 10;
const HP_MIN = 0;

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
  }

  useCard(card: CardData) {
    // TODO 카드 사용 로직 구현
  }

  takeDamage(amount: number) {
    if (this.isDefended()) return;

    const damage = amount * this.damageMultiplier;

    this.hp = Math.max(HP_MIN, this.hp - damage);

    this.emit('takeDamage', damage);
  }

  isDefended() {
    return this.defenseChance > Math.random() * 100;
  }

  acquireCard(card: Card) {
    this.cards.set(card.type, (this.cards.get(card.type) || 0) + card.count);
    this.emit('acquireCard', card);
  }

  loseCard(card: Card) {
    this.cards.set(card.type, (this.cards.get(card.type) || 0) - card.count);

    if (this.cards.get(card.type) === 0) {
      this.cards.delete(card.type);
    }

    this.emit('loseCard', card);
  }

  increaseDefenseChance(chance: number) {
    this.defenseChance = Math.min(DEFENSE_CHANCE_MAX, this.defenseChance + chance);
    this.emit('increaseDefenseChance', chance);
  }

  decreaseDefenseChance(chance: number) {
    this.defenseChance = Math.max(this.baseDefenseChance, this.defenseChance - chance);
    this.emit('decreaseDefenseChance', chance);
  }

  increaseDamageMultiplier(amount: number) {
    this.damageMultiplier = Math.max(DAMAGE_MULTIPLIER_MAX, this.damageMultiplier + amount);
    this.emit('increaseDamageMultiplier', amount);
  }

  decreaseDamageMultiplier(amount: number) {
    this.damageMultiplier = Math.min(DAMAGE_MULTIPLIER_MIN, this.damageMultiplier - amount);
    this.emit('decreaseDamageMultiplier', amount);
  }

  addInvisibleFrom(characters: Character[]) {
    characters.forEach((character) => {
      this.invisibleFrom.add(character);
    });
    this.emit('addInvisibleFrom', characters);
  }

  removeInvisibleFrom(characters: Character[]) {
    characters.forEach((character) => {
      this.invisibleFrom.delete(character);
    });
    this.emit('removeInvisibleFrom', characters);
  }

  addBangCount(count: number) {
    this.todayBangCount += count;
    this.emit('addBangCount', count);
  }

  resetBangCount() {
    this.todayBangCount = 0;
    this.emit('resetBangCount');
  }

  setAmountForDefense(amount: number) {
    this.amountForDefense = amount;
    this.emit('setAmountForDefense', amount);
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
    character.emit('recover', amount);
  }
}
