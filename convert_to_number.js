function solution(s) {
  let refined = s;
  const hintMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  Object.keys(hintMap).map((key, i) => {
    while (refined.indexOf(key) > -1) {
      refined = refined.replace(key, hintMap[key]);
    }
  });
  return parseInt(refined);
}
