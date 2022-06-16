function solution(orders, course) {
  course.map((courseLength) => {
    orders.map((order) => {
      getCombinations(Array.from(order), courseLength); // 배열을 얕게 복사해 새로운 배열을 만듦
    });
  });
  var answer = [];
  return answer;
}

const getCombinations = (array, selectNum) => {
  const result = [];
  if (selectNum === 1) return array.map((element) => [element]);
  array.forEach((fixed, index, origin) => {
    const restCombinations = getCombinations(
      origin.slice(index + 1),
      selectNum - 1
    ); // fixed와 조합이 가능한 알파벳들의 배열을 구하는 법
    const attached = restCombinations.map((restCombination) => [
      fixed,
      ...restCombination,
    ]);
    // 조합이 가능한 배열을 돌면서 fixed와 조합해서 최종 조합을 구하는 로직
    console.log("attached => ", attached);
    result.push(...attached);
  });
  return result;
};
