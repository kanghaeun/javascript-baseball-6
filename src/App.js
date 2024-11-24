import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import Validator from "./utils/Validator.js";

class App {
  async play() {
    OutputView.printStartBaseballGame();

    const num = await InputView.readBaseballNum();
    const numArr = num.split("").map(Number);
    Validator.baseballNumValidation(numArr);
  }
}

const app = new App();
await app.play();

export default App;
