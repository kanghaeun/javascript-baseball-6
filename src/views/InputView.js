import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/inputMessage.js";

const InputView = {
  async readBaseballNum() {
    const baseballNum = await Console.readLineAsync(INPUT_MESSAGE.INPUT_NUM);
    return Number(baseballNum);
  },
};

export default InputView;
