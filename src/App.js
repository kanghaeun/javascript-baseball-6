import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Validator from "./utils/Validator.js";
import { MissionUtils, Console } from "@woowacourse/mission-utils";
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
          console.log("2", random);

          if (random.indexOf(numArr[i]) === numArr.indexOf(numArr[i])) {
            strike += 1;
          } else ball += 1;
        } else notsing += 1;
      }

      if (notsing === 3) Console.print(OUTPUT_MESSAGE.NOTSING);
      if (strike > 0 && ball > 0) {
        Console.print(`${strike}스트라이크 ${ball}볼`);
      } else if (strike > 0) Console.print(`${strike}스트라이크`);
      else if (ball > 0) Console.print(`${ball}볼`);
    }
  }
}

export default App;
