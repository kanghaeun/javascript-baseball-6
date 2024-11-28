import OutputView from "../views/OutputView.js";
import InputView from "../views/InputView.js";
import Validatior from "../utils/Validator.js";
import MatchChecker from "../models/MatchChecker.js";

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

  #getGameResult() {
    const matchResult = new MatchChecker(this.#participants);
    this.#result = matchResult.getGameResult();
    OutputView.printGameResult(this.#result);
  }

  //   // let strike = 0;
  //   // let ball = 0;
  //   // let notsing = 0;

  //   //컴퓨터와 나의 값 비교
  //   for (let i = 0; i < numArr.length; i++) {
  //     if (random.includes(numArr[i])) {
  //       if (random.indexOf(numArr[i]) === numArr.indexOf(numArr[i])) {
  //         strike += 1;
  //       } else ball += 1;
  //     } else notsing += 1;
  //   }

  //   if (notsing === 3) OutputView.printNothing();
  //   if (strike > 0 && ball > 0) {
  //     OutputView.printRightBallStrike(ball, strike);
  //   } else if (strike > 0) OutputView.printRightStrike(strike);
  //   else if (ball > 0) OutputView.printRightBall(ball);

  //   if (strike === 3) {
  //     OutputView.printRightAllNum();
  //     const retry = await InputView.readretry();

  //     Validator.retryNumValidation(retry);

  //     if (retry === "2") return;
  //     random = RandomNum.createRandomNum();
  //   }
  // }
}
export default BaseballGame;