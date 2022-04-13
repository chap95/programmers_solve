function solution(new_id) {
  if (!new_id) return "aaa";
  let refined;
  refined = new_id
    .toLowerCase()
    .match(/([A-Z])|([0-9])|-|_|\./gi)
    .reduce((prev, cur) => prev + cur, "")
    .replace(/[\.]{2,}/g, ".");

  if (refined[0] === ".") {
    refined = refined.slice(1, refined.length);
  }

  if (refined[refined.length - 1] === ".") {
    refined = refined.slice(0, refined.length - 1);
  }
  if (!refined) return "aaa";
  if (refined.length >= 16) refined = refined.slice(0, 15);
  if (refined[refined.length - 1] === ".") {
    refined = refined.slice(0, refined.length - 1);
  }
  if (refined.length <= 2) {
    while (refined.length < 3) {
      refined = refined.concat("", refined[refined.length - 1]);
    }
  }

  return refined;
}
