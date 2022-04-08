function solution(numbers) {
  var answer = "";

  answer = numbers
    .map((number) => number + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  if (answer[0] === "0") return "0";

  return answer;
}
