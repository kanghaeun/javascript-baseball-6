import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/outputMessage.js";

const OutputView = {
  printStartBaseballGame() {
    Console.print(OUTPUT_MESSAGE.START_GAME);
  },
};

export default OutputView;
