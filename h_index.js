function solution(citations) {
  let answer = 0;
  let length = citations.length;

  citations.sort((a, b) => a - b);
  for (let i = 0; i < length + 1; i++) {
    let lessCitations = [];
    let largerCitations = [];
    citations.map((value) => {
      if (i <= value) largerCitations.push(value);
    });
    if (largerCitations.length >= i && i > answer) answer = i;
  }
  return answer;
}
