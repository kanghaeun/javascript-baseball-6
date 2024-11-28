import Computer from "./models/Computer.js";
import MatchChecker from "./models/MatchChecker.js";
import BaseballGame from "./controller/BaseballGame.js";
class App {
  #computer;
  #matchResult;
  #gamecontroller;

  constructor() {
    this.#computer = new Computer();
    this.#matchResult = new MatchChecker();
    this.#gamecontroller = new BaseballGame(this.#computer, this.#matchResult);
  }
  async play() {
    await this.#gamecontroller.start();
  }
}

const app = new App();
await app.play();

export default App;
