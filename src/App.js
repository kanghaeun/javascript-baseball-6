import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Validator from "./utils/Validator.js";
import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "./constants/outputMessage.js";
import RandomNum from "./utils/RandomNum.js";

class App {
  async play() {
    OutputView.printStartBaseballGame();

    let random = RandomNum.createRandomNum();
    while (true) {
      const num = await InputView.readBaseballNum();

      const numArr = num.split("").map(Number);
      Validator.baseballNumValidation(numArr);

      let strike = 0;
      let ball = 0;
      let notsing = 0;

      //컴퓨터와 나의 값 비교
      for (let i = 0; i < numArr.length; i++) {
        if (random.includes(numArr[i])) {
          if (random.indexOf(numArr[i]) === numArr.indexOf(numArr[i])) {
            strike += 1;
          } else ball += 1;
        } else notsing += 1;
      }

      if (notsing === 3) OutputView.printNothing();
      if (strike > 0 && ball > 0) {
        OutputView.printRightBallStrike(ball, strike);
      } else if (strike > 0) OutputView.printRightStrike(strike);
      else if (ball > 0) OutputView.printRightBall(ball);

      if (strike === 3) {
        OutputView.printRightAllNum();
        const retry = await InputView.readretry();

        Validator.retryNumValidation(retry);

        if (retry === "2") return;
        random = RandomNum.createRandomNum();
      }
    }
  }
}

export default App;
