import { MissionUtils } from "@woowacourse/mission-utils";
class RandomNum {
  static createRandomNum() {
    const computer = [];
    while (computer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNum)) {
        computer.push(randomNum);
      }
    }
    return computer;
  }
}
export default RandomNum;
