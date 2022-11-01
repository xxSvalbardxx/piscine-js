function isValid(date) {
    if (date === Date.now()){
        return true
    }
  return date instanceof Date && !isNaN(date);
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

console.log(isValid(new Date()));
console.log(isValid(Date.now()));