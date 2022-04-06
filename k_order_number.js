function solution(array, commands) {
  let answer = [];
  commands.map((value, index) => {
    const [start, length, orderNumber] = value;
    const targetIndex = orderNumber - 1;
    let refinedArray = array.slice(start - 1, length);
    refinedArray = sort(refinedArray);
    const result = refinedArray[targetIndex];

    answer.push(result);
  });
  return answer;
}
function sort(array) {
  const arrayLength = array.length;
  for (let k = 0; k < arrayLength; k++) {
    for (let i = 0; i < arrayLength - k; i++) {
      const currentValue = array[i];
      const compareValue = array[i + 1];
      if (currentValue > compareValue) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }

  return array;
}
