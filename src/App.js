import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Validator from "./utils/Validator.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    OutputView.printStartBaseballGame();

    const computer = [];
    while (computer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNum)) {
        computer.push(randomNum);
      }
    }

    while (true) {
      const num = await InputView.readBaseballNum();

      const numArr = num.split("").map(Number);
      Validator.baseballNumValidation(numArr);
    }
  }
}

const app = new App();
await app.play();

export default App;
