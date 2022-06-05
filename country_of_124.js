function solution(n) {
  const answer = "";
  const hintMap = {
    0: "4",
    1: "1",
    2: "2",
  };

  function getRemain(input) {
    if (input === 0) return "";
    const quotient = Math.floor(input / 3);
    const remain = input % 3;

    if (quotient === 0) return hintMap[String(remain)];
    if (remain === 0) return getRemain(quotient - 1) + hintMap[String(remain)];
    return getRemain(quotient) + hintMap[String(remain)];
  }

  const result = getRemain(n);
  return result;
}
