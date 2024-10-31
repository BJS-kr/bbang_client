import { USER_STATE } from '../constants/game.js';

const BBANG_SECOND = 5; // 5초
const DEATH_MATCH_SECOND = 5; // 5초

export class UserState {
  state;
  nextState;
  nextStateAt;
  #stateTimer;
  #onStateTimeout;

  constructor(onStateTimeout) {
    this.state = USER_STATE.NONE;
    this.nextState = USER_STATE.NONE;
    this.nextStateAt = 0;
    this.#onStateTimeout = onStateTimeout;
  }

  setState(state) {
    this.state = state;
    switch (this.state) {
      case USER_STATE.NONE:
        this.nextState = USER_STATE.NONE;
        this.nextStateAt = 0;
        break;

      case USER_STATE.BBANG_SHOOTER:
        this.nextState = USER_STATE.NONE;
        this.nextStateAt = Date.now() + BBANG_SECOND * 1000;
        break;

      case USER_STATE.BBANG_TARGET:
        this.nextState = USER_STATE.NONE;
        this.nextStateAt = Date.now() + BBANG_SECOND * 1000;
        break;

      case USER_STATE.DEATH_MATCH:
        this.nextState = USER_STATE.DEATH_MATCH_TURN;
        this.nextStateAt = Date.now() + DEATH_MATCH_SECOND * 1000;
        break;

      case USER_STATE.DEATH_MATCH_TURN:
        this.nextState = USER_STATE.DEATH_MATCH;
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

    if (this.state === USER_STATE.NONE) {
      return;
    }

    this.#stateTimer = setTimeout(() => {
      const lastState = this.state;
      this.state = this.nextState;
      this.#onStateTimeout(lastState, this.state);
    }, this.nextStateAt - Date.now());
  }
}
