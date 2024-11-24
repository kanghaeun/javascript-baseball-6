import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  async play() {
    OutputView.printStartBaseballGame();

    const baseballNum = await InputView.readBaseballNum();
  }
}

const app = new App();
await app.play();

export default App;
