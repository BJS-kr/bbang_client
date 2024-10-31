import { CARD_TYPE } from '../constants/game';

const cardTypes = Object.values(CARD_TYPE).filter((v) => typeof v === 'number');

export function pickRandomCardType() {
  return cardTypes[Math.floor(Math.random() * cardTypes.length)];
}
