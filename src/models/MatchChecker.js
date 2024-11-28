class MatchChecker {
  #score = {
    strike: 0,
    ball: 0,
    nothing: 0,
  };

  //MatchChecker를 호출하면 바로 실행되는 함수로 전체적인 흐름도를 파악가능
  constructor(participants) {
    this.#compareUserAndComputer(participants);
  }

  #compareUserAndComputer(participants) {
    const { computerNum, userNum } = participants;
    console.log(computerNum, userNum);

    for (let i = 0; i < userNum.length; i++) {
      if (computerNum.includes(userNum[i])) {
        if (computerNum.indexOf(userNum[i]) === userNum.indexOf(userNum[i])) {
          this.#score.strike += 1;
        } else this.#score.ball += 1;
      } else this.#score.nothing += 1;
    }
  }

  getGameResult() {
    return this.#score;
  }
}
export default MatchChecker;
