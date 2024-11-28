import Computer from "./models/Computer.js";
import BaseballGame from "./controller/BaseballGame.js";

class App {
  #computer;
  #gamecontroller;

  constructor() {
    this.#computer = new Computer();
    this.#gamecontroller = new BaseballGame(this.#computer);
  }
  async play() {
    await this.#gamecontroller.start();
  }
}

const app = new App();
await app.play();

export default App;
