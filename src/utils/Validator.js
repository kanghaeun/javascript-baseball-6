import { ERROR_MESSAGE } from "../constants/errorMessage.js";

class Validator {
  static baseballNum(numArr) {
    if (numArr.length === 0) throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    if (numArr.length !== 3) throw new Error(ERROR_MESSAGE.BASEBALL_NUM_FORMAT);
    // if (numArr === isNaN) throw new Error(ERROR_MESSAGE.BASEBALL_NUM_FORMAT);
    if (numArr.some((num) => isNaN(num)))
      throw new Error(ERROR_MESSAGE.BASEBALL_NUM_FORMAT);

    let setNumArr = new Set(numArr);
    if (numArr.length !== setNumArr.size)
      throw new Error(ERROR_MESSAGE.BASEBALL_NUM_DUPLICATE);

    return numArr;
  }

  static retryNum(retry) {
    if (retry === "") throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    if (retry !== "1" && retry !== "2")
      throw new Error(ERROR_MESSAGE.RETRY_GAME_FORMAT);
  }
}

export default Validator;
