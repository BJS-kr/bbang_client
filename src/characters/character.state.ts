import { CharacterState } from '../constants/game';

const BBANG_SECOND = 5; // 5초
const DEATH_MATCH_SECOND = 5; // 5초

export type OnStateTimeout = (from: CharacterState, to: CharacterState) => void;
export class CharacterStateInfo {
  state;
  nextState;
  nextStateAt;
  stateTargetUserId;
  #stateTimer;
  #onStateTimeout: OnStateTimeout | null = null;

  constructor() {
    this.state = CharacterState.NONE;
    this.nextState = CharacterState.NONE;
    this.nextStateAt = 0;
    this.stateTargetUserId = '';
  }

  setState(targetUserId, state: CharacterState, onStateTimeout: OnStateTimeout | null) {
    const prevState = this.state;

    // 상태 변경 전에 이전 상태에 대한 timeout 처리
    if (this.#onStateTimeout) {
      this.#onStateTimeout(prevState, state);
    }

    this.state = state;
    this.stateTargetUserId = targetUserId;
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

      // 플리마켓 타이밍은 클라이언트 리액션으로 핸들링

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
