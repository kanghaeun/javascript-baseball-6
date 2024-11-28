import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/outputMessage.js";

const OutputView = {
  printStartBaseballGame() {
    Console.print(OUTPUT_MESSAGE.START_GAME);
  },

  printGameResult(score) {
    if (score.nothing === 3) Console.print(OUTPUT_MESSAGE.NOTSING);

    if (score.strike > 0 && score.ball > 0) {
      Console.print(
        `${score.ball}${OUTPUT_MESSAGE.BALL} ${score.strike}${OUTPUT_MESSAGE.STRIKE}`
      );
    } else if (score.strike > 0)
      Console.print(`${strike}${OUTPUT_MESSAGE.STRIKE}`);
    else if (score.ball > 0)
      Console.print(`${score.ball}${OUTPUT_MESSAGE.BALL}`);
  },

  // printRightBallStrike(ball, strike) {
  //   Console.print(
  //     `${ball}${OUTPUT_MESSAGE.BALL} ${strike}${OUTPUT_MESSAGE.STRIKE}`
  //   );
  // },

  // printRightStrike(strike) {
  //   Console.print(`${strike}${OUTPUT_MESSAGE.STRIKE}`);
  // },

  // printRightBall(ball) {
  //   Console.print(`${ball}${OUTPUT_MESSAGE.BALL}`);
  // },

  // printNothing() {
  //   Console.print(OUTPUT_MESSAGE.NOTSING);
  // },

  // printRightAllNum() {
  //   Console.print(OUTPUT_MESSAGE.GET_NUM_RIGHT);
  // },
};

export default OutputView;
