function solution(participant, completion) {
  const participantMap = {};

  participant.map((value) => {
    if (!participantMap[value]) {
      participantMap[value] = 1;
    } else {
      participantMap[value]++;
    }
  });

  completion.map((value) => {
    participantMap[value]--;
  });
  const [key, _value] = Object.entries(participantMap)
    .filter(([_, value]) => value === 1)
    .flat();

  return key;
}
