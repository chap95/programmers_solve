function solution(orders, course) {
  course.map((courseLength) => {
    orders.map((order) => {
      getCombinations(Array.from(order), courseLength);
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
    );
    const attached = restCombinations.map((restCombination) => [
      fixed,
      ...restCombination,
    ]);
    console.log("attached => ", attached);
    result.push(...attached);
  });
  return result;
};
