function solution(record) {
  var answer = [];
  const actionList = [];
  const actionHintMap = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };
  const recordObj = {};
  record.map((value) => {
    const [action, userId, nickname] = value.split(" ");
    if (action === "Enter" || action === "Change") {
      recordObj[userId] = nickname;
    }

    if (action === "Enter" || action === "Leave") {
      actionList.push({ [userId]: action });
    }
  });

  actionList.map((actionObj) => {
    const userId = Object.keys(actionObj)[0];
    const action = Object.values(actionObj)[0];
    const nickname = recordObj[userId];
    const refinedAction = actionHintMap[action];
    const result = nickname + refinedAction;
    answer.push(result);
  });
  return answer;
}
