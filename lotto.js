function solution(lottos, win_nums) {
  const matchHintMap = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };
  let matchNumber = lottos.filter(
    (value) => win_nums.indexOf(value) !== -1
  ).length;
  const lowest = matchHintMap[matchNumber] || 6;
  matchNumber += lottos.filter((value) => value === 0).length;
  const highest = matchHintMap[matchNumber] || 6;

  return [highest, lowest];
}
