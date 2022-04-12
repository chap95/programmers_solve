function solution(numbers, hand) {
  const leftSideNumbers = [1, 4, 7];
  const rightSideNumbers = [3, 6, 9];
  let leftCurrentNumber = "*";
  let rightCurrentNumber = "#";
  const hintMap = {
    0: [3, 1],
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    "#": [3, 2],
  };
  var answer = "";

  for (const number of numbers) {
    if (leftSideNumbers.indexOf(number) !== -1) {
      answer += "L";
      leftCurrentNumber = number;
      continue;
    }

    if (rightSideNumbers.indexOf(number) !== -1) {
      answer += "R";
      rightCurrentNumber = number;
      continue;
    }

    const [x, y] = hintMap[number];
    const [xL, yL] = hintMap[leftCurrentNumber];
    const [xR, yR] = hintMap[rightCurrentNumber];

    const leftOffset = Math.abs(x - xL) + Math.abs(y - yL);
    const rightOffset = Math.abs(x - xR) + Math.abs(y - yR);

    if (leftOffset < rightOffset) {
      answer += "L";
      leftCurrentNumber = number;
      continue;
    }

    if (rightOffset < leftOffset) {
      answer += "R";
      rightCurrentNumber = number;
      continue;
    }

    if (hand === "left") {
      leftCurrentNumber = number;
    } else {
      rightCurrentNumber = number;
    }
    answer += hand === "left" ? "L" : "R";
  }
  return answer;
}
