function solution(progresses, speeds) {
  const answer = [];
  const remains = progresses.map((progress) => 100 - progress);
  const remainDays = remains.map((remain, index) =>
    Math.ceil(remain / speeds[index])
  );
  let largestDay = 0;
  let largestDayIndex = 0;
  remainDays.map((remainDay, index) => {
    if (index === 0) {
      largestDay = remainDay;
      largestDayIndex = index;
    }

    if (largestDay < remainDay) {
      answer.push(remainDays.slice(largestDayIndex, index).length);
      largestDay = remainDay;
      largestDayIndex = index;
    }

    if (index + 1 === remainDays.length) {
      answer.push(remainDays.slice(largestDayIndex, index).length + 1);
    }
  });

  return answer;
}
