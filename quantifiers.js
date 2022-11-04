function every(array, func) {
  for (let element of array) { // for (let i = 0; i < array.length; i++) {
    if (!func(element)) return false; // if (!func(array[i])) return false;
  }
  return true;
}
function some(array, func) {
  for (let element of array) {
    if (func(element)) return true;
  }
  return false;
}
function none(array, func) {
  for (let element of array) {
    if (func(element)) return false;
  }
  return true;
}
