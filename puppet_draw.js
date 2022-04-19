function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (let move of moves) {
    for (let values of board) {
      if (values[move - 1] > 0) {
        if (stack[stack.length - 1] !== values[move - 1]) {
          stack.push(values[move - 1]);
        } else {
          stack.splice(stack.length - 1, 1);
          answer += 2;
        }
        values[move - 1] = 0;
        break;
      }
    }
  }

  return answer;
}
