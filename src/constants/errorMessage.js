const ERROR_TAG = "[ERROR]";

export const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: `${ERROR_TAG} 입력된 값이 없습니다. 값을 다시 입력해 주세요.`,

  BASEBALL_NUM_FORMAT: `${ERROR_TAG} 입력값은 3개의 숫자로 구성되어 있어야 합니다.`,
  BASEBALL_NUM_DUPLICATE: `${ERROR_TAG} 각각 서로 다른 숫자로 구성되어 있어야 합니다.`,

  RETRY_GAME_FORMAT: `${ERROR_TAG} 1과 2 중 하나의 숫자로 구성되어 있어야 합니다.`,
});
