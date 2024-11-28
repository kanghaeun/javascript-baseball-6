import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/inputMessage.js";

const InputView = {
  async readBaseballNum() {
    const baseballNum = await Console.readLineAsync(INPUT_MESSAGE.INPUT_NUM);
    return baseballNum.split("").map(Number);
  },
  async readretry() {
    const retryNum = await Console.readLineAsync(INPUT_MESSAGE.RETRY_GAME);
    return retryNum;
  },
};

export default InputView;
