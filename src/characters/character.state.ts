import { CharacterStateType } from '../protobuf/compiled';

const BBANG_SECOND = 5; // 5초
const DEATH_MATCH_SECOND = 5; // 5초
const CARD_SELECT_SECOND = 10; // 10초
export type OnStateTimeout = (from: CharacterStateType, to: CharacterStateType) => void;
export class CharacterStateInfo {
  state;
  nextState;
  nextStateAt;
  stateTargetUserId: bigint;
  #stateTimer;
  #onStateTimeout: OnStateTimeout | null = null;

  constructor() {
    this.state = CharacterStateType.NONE_CHARACTER_STATE;
    this.nextState = CharacterStateType.NONE_CHARACTER_STATE;
    this.nextStateAt = 0;
    this.stateTargetUserId = BigInt(0);
  }

  toCharacterStateInfoData() {
    return {
      ...this,
      stateTargetUserId: Number(this.stateTargetUserId),
    };
  }

  react(state: CharacterStateType) {
    const prevState = this.state;
    this.state = state;
    this.nextState = CharacterStateType.NONE_CHARACTER_STATE;
    this.nextStateAt = 0;
    this.stateTargetUserId = BigInt(0);

    if (this.#onStateTimeout) {
      this.#onStateTimeout(prevState, this.state);
      this.resetTimer();
    }
  }

  setState(targetUserId: bigint, state: CharacterStateType, onStateTimeout: OnStateTimeout | null) {
    const prevState = this.state;
    const prevOnStateTimeout = this.#onStateTimeout;

    this.state = state;
    this.stateTargetUserId = targetUserId;
    this.#onStateTimeout = onStateTimeout;

    if (prevState === CharacterStateType.FLEA_MARKET_TURN) {
      if (prevOnStateTimeout) {
        prevOnStateTimeout(prevState, state);
      }
    }

    switch (this.state) {
      case CharacterStateType.NONE_CHARACTER_STATE:
        this.nextState = CharacterStateType.NONE_CHARACTER_STATE;
        this.nextStateAt = 0;
        this.resetTimer();
        break;

      case CharacterStateType.FLEA_MARKET_TURN:
      case CharacterStateType.FLEA_MARKET_WAIT:
      case CharacterStateType.ABSORBING:
      case CharacterStateType.ABSORB_TARGET:
      case CharacterStateType.HALLUCINATING:
      case CharacterStateType.HALLUCINATION_TARGET:
      case CharacterStateType.CONTAINED:
        this.nextState = this.state;
        this.nextStateAt = 0;
        break;

      case CharacterStateType.BBANG_SHOOTER:
      case CharacterStateType.BBANG_TARGET:
      case CharacterStateType.BIG_BBANG_SHOOTER:
      case CharacterStateType.BIG_BBANG_TARGET:
      case CharacterStateType.GUERRILLA_SHOOTER:
      case CharacterStateType.GUERRILLA_TARGET:
        this.nextState = CharacterStateType.NONE_CHARACTER_STATE;
        this.nextStateAt = Date.now() + BBANG_SECOND * 1000;
        break;

      case CharacterStateType.DEATH_MATCH_STATE:
        this.nextState = CharacterStateType.DEATH_MATCH_TURN_STATE;
        this.nextStateAt = Date.now() + DEATH_MATCH_SECOND * 1000;
        break;

      case CharacterStateType.DEATH_MATCH_TURN_STATE:
        this.nextState = CharacterStateType.DEATH_MATCH_STATE;
        this.nextStateAt = Date.now() + DEATH_MATCH_SECOND * 1000;
        break;

      case CharacterStateType.ABSORBING:
      case CharacterStateType.ABSORB_TARGET:
      case CharacterStateType.HALLUCINATING:
      case CharacterStateType.HALLUCINATION_TARGET:
        this.nextState = CharacterStateType.NONE_CHARACTER_STATE;
        this.nextStateAt = Date.now() + CARD_SELECT_SECOND * 1000;
        break;

      case CharacterStateType.CONTAINED:
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
    this.#stateTimer = null;
    this.#onStateTimeout = null;
  }

  #startStateTimer() {
    if (this.#stateTimer) {
      clearTimeout(this.#stateTimer);
    }

    switch (this.state) {
      case CharacterStateType.NONE_CHARACTER_STATE:
      case CharacterStateType.FLEA_MARKET_TURN:
      case CharacterStateType.FLEA_MARKET_WAIT:
      case CharacterStateType.ABSORBING:
      case CharacterStateType.ABSORB_TARGET:
      case CharacterStateType.HALLUCINATING:
      case CharacterStateType.HALLUCINATION_TARGET:
      case CharacterStateType.CONTAINED:
        return;

      default:
        break;
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
