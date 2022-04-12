function solution(id_list, report, k) {
  // 한 사람이 같은 사람을 신고한 경우 제외
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });

  // 사용자가 몇 번 신고 당했는지 map 으로 구성
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  // 사용자가 몇 번 신고한 사람의 계정이 정지 당했다는 고지 메일을 받아야 하는지
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }

  // 위 계산을 수행하면 count 가 >= k 이상인 사람들만 map 으로 구성되기 때문에
  // 마지막에 undefined 면 0 을 반환
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
