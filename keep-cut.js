const cutFirst = (str) => str.slice(2);
const cutLast = (str) => str.slice(-2);
const cutFirstLast = (str) => str.slice(2, -2);
const keepFirst = (str) => str.slice(0, 2);
const keepLast = (str) => str.slice(-2, str.length);
const keepFirstLast = (str) => str.slice(0, 2) + str.slice(-2, str.length);

/*
const str = 'abcdef';
console.log(cutFirst(str));
console.log(cutLast(str));
console.log(cutFirstLast(str));
console.log(keepFirst(str));
console.log(keepLast(str));
console.log(keepFirstLast(str));
*/