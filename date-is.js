function isValid(date) {
    console.log(date)
  return !isNaN(date);
}
function isAfter(date, dateToCompare) {
  return isValid(date) && isValid(dateToCompare) && date > dateToCompare;
}
function isBefore(date, dateToCompare) {
  return isValid(date) && isValid(dateToCompare) && date < dateToCompare;
}
function isFuture(date) {
  return isValid(date) && date > new Date();
}
function isPast(date) {
  return isValid(date) && date < new Date();
}
