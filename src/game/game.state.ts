import { GameStateData, PhaseType } from '../protobuf/compiled';
import { MessageProps } from '../protobuf/props';
import { GameEvents } from './game.events';

const DAY_SECOND = 180; // 3분
const END_SECOND = 30; // 30초

export class GameState {
  phaseType;
  nextPhaseAt = 0;
  #gameEvents: GameEvents;
  #phaseTimer;

  constructor(gameEvents: GameEvents) {
    this.#gameEvents = gameEvents;
    this.phaseType = PhaseType.NONE_PHASE;
    this.nextPhaseAt = 0;
  }

  toGameStateData(): MessageProps<GameStateData> {
    return {
      phaseType: this.phaseType,
      nextPhaseAt: this.nextPhaseAt,
    };
  }

  gameStart() {
    this.#startDay();
  }

  resetTimer() {
    if (this.#phaseTimer) {
      clearTimeout(this.#phaseTimer);
    }
  }

  #startDay() {
    this.phaseType = PhaseType.DAY;
    this.nextPhaseAt = Date.now() + DAY_SECOND * 1000;
    this.#gameEvents.emit('DAY');
    this.#startPhaseTimer();
  }

  #startEnd() {
    this.phaseType = PhaseType.END;
    this.nextPhaseAt = Date.now() + END_SECOND * 1000;
    this.#gameEvents.emit('END');
    this.#startPhaseTimer();
  }

  #startPhaseTimer() {
    if (this.#phaseTimer) {
      clearTimeout(this.#phaseTimer);
    }

    this.#phaseTimer = setTimeout(
      () => {
        switch (this.phaseType) {
          case PhaseType.DAY:
            this.#startEnd();
            break;
          case PhaseType.END:
            this.#startDay();
            break;
        }
      },
      Math.max(0, this.nextPhaseAt - Date.now()),
    );
  }
}
