import { MissionUtils } from "@woowacourse/mission-utils";

class Computer {
  // 랜덤 숫자를 만드는 컴퓨터 역할 (랜덤 수 생성)
  #randomNumArr;

  constructor() {
    this.#generateRandomNum();
  }

  #setRandomNum() {
    let array = [];
    while (array.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!array.includes(randomNum)) {
        array.push(randomNum);
      }
    }
    return array;
  }

  #generateRandomNum() {
    const randomNumArr = this.#setRandomNum();
    this.#randomNumArr = randomNumArr;
    console.log(this.#randomNumArr);
  }

  getRandomNum() {
    return this.#randomNumArr;
  }
}

export default Computer;
