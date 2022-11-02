function isFriday(date) {
  return date.getDay() === 5;
}
function isWeekend(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}
function isLeapYear(date) {
  let year = date.getFullYear();
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function isLastDayOfMonth(date) {
  return date.getDate() === new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}