export function getToday() {
  const today = new Date().toLocaleDateString();
  const todayArr = today.split("/");
  const [month, day, year] = todayArr;

  return `${year}-${month > 10 ? month : 0 + month}-${
    day > 10 ? day : 0 + day
  }`;
}
