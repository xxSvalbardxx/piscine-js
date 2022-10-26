const multiply = (a, b) => {
    var res = 0;
    var positiveSign = (b > 0 && a > 0) || (b < 0 && a < 0);
    var quo = Math.abs(a);
    var den = Math.abs(b);
    
    if (a === 0 || b === 0) return 0;
    if (b === -1 && a === -2147483648) return 2147483647;
    if (den === 1) return b > 0 ? a : -a;
    
    while (den > 0) {
        if (den & 1) res += quo;
        quo += quo;
        den >>= 1;
    }
    
    return positiveSign ? res : -res;
};
const divide = (a, b) => {
    var quo = Math.abs(a);
    var den = Math.abs(b);
    var positiveSign = (b > 0 && a > 0) || (b < 0 && a < 0);
    var res = 0;
    var arr = [den];

  if (a === 0 || quo < den) return 0;
  if (b === -1 && a === -2147483648) return 2147483647;
  if (den === 1) return b > 0 ? a : -a;

  while (arr[arr.length - 1] < quo) arr.push(arr[arr.length - 1] + arr[arr.length - 1]);

  for (var i = arr.length - 1; i >= 0; i--) {
    if (quo >= arr[i]) {
      quo -= arr[i];
      res += i === 0 ? 1 : 2 << (i - 1);
    }
  }

  return positiveSign ? res : -res;
}
// modulo without using % and * operators and that works for negative numbers
const modulo = (a, b) => {

    var quo = Math.abs(a);
    var den = Math.abs(b);
    var positiveSign = (b > 0 && a > 0) || (b < 0 && a < 0);
    var res = 0;
    var arr = [den];

  if (a === 0 || quo < den) return quo;
  if (b === -1 && a === -2147483648) return 0;
  if (den === 1) return 0;

  while (arr[arr.length - 1] < quo) arr.push(arr[arr.length - 1] + arr[arr.length - 1]);

  for (var i = arr.length - 1; i >= 0; i--) {
    if (quo >= arr[i]) {
      quo -= arr[i];
      res += i === 0 ? 1 : 2 << (i - 1);
    }
  }

  return positiveSign ? quo : -quo;
}
console.log(multiply(-22, 123));
console.log(divide(10, 3));
console.log(modulo(123, -22));