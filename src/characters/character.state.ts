import { CharacterState } from '../constants/game';

const BBANG_SECOND = 5; // 5초
const DEATH_MATCH_SECOND = 5; // 5초

export type OnStateTimeout = (from: CharacterState, to: CharacterState) => void;
export class CharacterStateInfo {
  state;
  nextState;
  nextStateAt;
  #stateTimer;
  #onStateTimeout: OnStateTimeout | null = null;

  constructor() {
    this.state = CharacterState.NONE;
    this.nextState = CharacterState.NONE;
    this.nextStateAt = 0;
  }

  setState(state: CharacterState, onStateTimeout: OnStateTimeout | null) {
    this.state = state;
    this.#onStateTimeout = onStateTimeout;

    switch (this.state) {
      case CharacterState.NONE:
        this.nextState = CharacterState.NONE;
        this.nextStateAt = 0;
        this.resetTimer();

        break;

      case CharacterState.BBANG_SHOOTER:
        this.nextState = CharacterState.NONE;
        this.nextStateAt = Date.now() + BBANG_SECOND * 1000;
        break;

      case CharacterState.BBANG_TARGET:
        this.nextState = CharacterState.NONE;
        this.nextStateAt = Date.now() + BBANG_SECOND * 1000;
        break;

      case CharacterState.DEATH_MATCH:
        this.nextState = CharacterState.DEATH_MATCH_TURN;
        this.nextStateAt = Date.now() + DEATH_MATCH_SECOND * 1000;
        break;

      case CharacterState.DEATH_MATCH_TURN:
        this.nextState = CharacterState.DEATH_MATCH;
        this.nextStateAt = Date.now() + DEATH_MATCH_SECOND * 1000;
        break;

      default:
        console.error(`[UserState] Unknown User State: ${this.state}`);
        break;
    }

    this.#startStateTimer();
  }

  resetTimer() {
    if (this.#stateTimer) {
      clearTimeout(this.#stateTimer);
    }
    this.#onStateTimeout = () => {};
  }

  #startStateTimer() {
    if (this.#stateTimer) {
      clearTimeout(this.#stateTimer);
    }

    if (this.state === CharacterState.NONE) {
      return;
    }

    this.#stateTimer = setTimeout(() => {
      const lastState = this.state;
      this.state = this.nextState;

      if (this.#onStateTimeout) {
        this.#onStateTimeout(lastState, this.state);
      }
    }, this.nextStateAt - Date.now());
  }
}
