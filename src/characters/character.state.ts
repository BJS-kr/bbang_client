import { CharacterState } from '../constants/game';

const BBANG_SECOND = 5; // 5초
const DEATH_MATCH_SECOND = 5; // 5초

export class CharacterStateInfo {
  state;
  nextState;
  nextStateAt;
  #stateTimer;
  #onStateTimeout;

  constructor(onStateTimeout: (...args: any[]) => void) {
    this.state = CharacterState.NONE;
    this.nextState = CharacterState.NONE;
    this.nextStateAt = 0;
    this.#onStateTimeout = onStateTimeout;
  }

  setState(state) {
    this.state = state;
    switch (this.state) {
      case CharacterState.NONE:
        this.nextState = CharacterState.NONE;
        this.nextStateAt = 0;
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
      this.#onStateTimeout(lastState, this.state);
    }, this.nextStateAt - Date.now());
  }
}
