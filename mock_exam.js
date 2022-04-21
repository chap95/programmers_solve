function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const userAnswers = [first, second, third];
  const userAnswersLengths = [first.length, second.length, third.length];
  const userMatches = [0, 0, 0];
  const result = [];

  answers.map((value, aIndex) => {
    userAnswersLengths.map((length, lIndex) => {
      let userAnswer = userAnswers[lIndex];
      let userAnswerIndex = aIndex < length ? aIndex : aIndex % length;
      if (value === userAnswer[userAnswerIndex]) userMatches[lIndex]++;
    });
  });

  let highest = Math.max(...userMatches);
  userMatches.map((value, index) => {
    if (value >= highest) result.push(index + 1);
  });

  return result;
}
