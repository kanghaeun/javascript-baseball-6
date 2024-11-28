import OutputView from "../views/OutputView.js";
import InputView from "../views/InputView.js";
import Validatior from "../utils/Validator.js";
import MatchChecker from "../models/MatchChecker.js";
import Computer from "../models/Computer.js";

class BaseballGame {
  #computer;
  #participants;
  #result;

  constructor(computer) {
    this.#computer = computer;
    this.#participants = {
      computerNum: this.#computer.getRandomNum(),
      userNum: undefined,
    };
  }

  async start() {
    OutputView.printStartBaseballGame();
    await this.#getUserNum();
  }

  //사용자 넘버 입력 받기 및 유효성 검사
  async #getUserNum() {
    const userNum = await InputView.readBaseballNum();
    Validatior.baseballNum(userNum);
    this.#participants.userNum = userNum;

    this.#getGameResult();
  }

  //야구 게임 한 판 결과 출력하기
  #getGameResult() {
    const matchResult = new MatchChecker(this.#participants);
    this.#result = matchResult.getGameResult();
    OutputView.printGameResult(this.#result);

    this.#checkAllStrike();
  }

  //다 맞추었는지 확인
  async #checkAllStrike() {
    if (this.#result.strike === 3) {
      await this.#clear();
    } else await this.#getUserNum();
  }

  //3스트라이크일 경우
  #clear() {
    OutputView.printRightAllNum();
    this.#checkRetry();
  }

  //다시 시도할 건지
  async #checkRetry() {
    const retry = await InputView.readretry();
    Validatior.retryNum(retry);
    if (retry === "2") this.#exit();
    else this.#retry();
  }

  #retry() {
    this.#participants.computerNum = new Computer().getRandomNum();
    this.#getUserNum();
  }

  #exit() {}
}
export default BaseballGame;
