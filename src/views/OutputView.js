import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/outputMessage.js";

const OutputView = {
  printStartBaseballGame() {
    Console.print(OUTPUT_MESSAGE.START_GAME);
  },

  printGameResult(score) {
    let result = "";

    if (score.ball > 0) result += `${score.ball}${OUTPUT_MESSAGE.BALL} `;
    if (score.strike > 0) result += `${score.strike}${OUTPUT_MESSAGE.STRIKE}`;
    if (result === "") result = OUTPUT_MESSAGE.NOTSING;

    Console.print(result.trim());
  },

  printRightAllNum() {
    Console.print(OUTPUT_MESSAGE.GET_NUM_RIGHT);
  },
};

export default OutputView;
