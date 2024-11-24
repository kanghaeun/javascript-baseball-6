import { ERROR_MESSAGE } from "../constants/errorMessage.js";

class Validator {
  static baseballNumValidation(numArr) {
    if (numArr.length === 0) throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    if (numArr.length !== 3) throw new Error(ERROR_MESSAGE.BASEBALL_NUM_FORMAT);
    if (numArr === isNaN) throw new Error(ERROR_MESSAGE.BASEBALL_NUM_FORMAT);

    let setNumArr = new Set(numArr);
    if (Array.length !== setNumArr.length)
      throw new Error(ERROR_MESSAGE.BASEBALL_NUM_DUPLICATE);
  }
}

export default Validator;
