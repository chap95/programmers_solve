function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}

// 1. 의상을 착용할 수 있는 부위: key, 옷의 갯수: value
// Object.values(
//   clothes.reduce((obj, t) => {
//     obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
//     return obj;
//   }, {})
// )

// 2. .reduce((a, b) => a * (b + 1), 1) - 1
// a : 이전 부위에 입을 수 있는 옷의 갯수(경우의 수) + 해당 부위에 의상 착용을 안하는 경우
// b : 현재 부위에 입을 수 있는 옷의 갯수(경우의 수)
// b + 1 : + 1을 하는 이유 -> 현재 부위에 의상을 착용 안하는 경우
// a * (b+1) : 이전 부위 경우의수 * 현재 경우의 수 === 이전 부위의 경우 각각에 대해 현재 부위 경우의 수를 계산
// reduce((a, b) => a * (b + 1), 1) - 1 : -1 을 하는 이유 -> 모든 부위에 의상을 착용하지 않는 경우를 제외
