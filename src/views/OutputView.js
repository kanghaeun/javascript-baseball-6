import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/outputMessage.js";

const OutputView = {
  printStartBaseballGame() {
    Console.print(OUTPUT_MESSAGE.START_GAME);
  },

  printRightBallStrike(ball, strike) {
    Console.print(
      `${ball}${OUTPUT_MESSAGE.BALL} ${strike}${OUTPUT_MESSAGE.STRIKE}`
    );
  },

  printRightStrike(strike) {
    Console.print(`${strike}${OUTPUT_MESSAGE.STRIKE}`);
  },

  printRightBall(ball) {
    Console.print(`${ball}${OUTPUT_MESSAGE.BALL}`);
  },

  printNothing() {
    Console.print(OUTPUT_MESSAGE.NOTSING);
  },

  printRightAllNum() {
    Console.print(OUTPUT_MESSAGE.GET_NUM_RIGHT);
  },
};

export default OutputView;
