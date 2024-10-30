import { PHASE_TYPE } from '../constants/game.js';

const DAY_SECIOND = 180; // 3분
const EVENING_SECOND = 60; // 1분
const END_SECOND = 10; // 10초

export class GameState {
  phaseType: (typeof PHASE_TYPE)[keyof typeof PHASE_TYPE] = PHASE_TYPE.NONE;
  nextPhaseAt = 0;
  #phaseTimer: NodeJS.Timeout | null = null;

  constructor() {
    this.phaseType = PHASE_TYPE.NONE;
    this.nextPhaseAt = 0;
  }

  gameStart() {
    this.#startDay();
  }

  #startDay() {
    console.log('[GameState] Start Day ... ');
    this.phaseType = PHASE_TYPE.DAY;
    this.nextPhaseAt = Date.now() + DAY_SECIOND * 1000;
    this.#startPhaseTimer();
  }

  #startEvening() {
    console.log('[GameState] Start Evening ... ');
    this.phaseType = PHASE_TYPE.EVENING;
    this.nextPhaseAt = Date.now() + EVENING_SECOND * 1000;
    this.#startPhaseTimer();
  }

  #startEnd() {
    console.log('[GameState] Start End ... ');
    this.phaseType = PHASE_TYPE.END;
    this.nextPhaseAt = Date.now() + END_SECOND * 1000;
    this.#startPhaseTimer();
  }

  #startPhaseTimer() {
    if (this.#phaseTimer) {
      clearTimeout(this.#phaseTimer);
    }

    this.#phaseTimer = setTimeout(() => {
      switch (this.phaseType) {
        case PHASE_TYPE.DAY:
          this.#startEvening();
          break;
        case PHASE_TYPE.EVENING:
          this.#startEnd();
          break;
        case PHASE_TYPE.END:
          this.#startDay();
          break;
      }
    }, this.nextPhaseAt - Date.now());
  }
}
