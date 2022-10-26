const slice = (str, start = 0, end = str.length) => {
if (typeof str === 'string') {
    let newStr = "";

    if ((start >= 0) && (end >= 0)) {
        for (let i = start; i < end; i++) {
            (newStr += str[i]);
        }
    return newStr;
  } else if ((start < 0) && (end >= 0)) {
        for (let j = end + start; j < end; j++) {
            (newStr += str[j]);
        }
    return newStr;
  } else if ((start >= 0) && (end < 0)) {
        for (let k = start; k < str.length + end; k++) {
            (newStr += str[k]);
        }
    return newStr;
  } else if ((start < 0) && (end < 0)) {
        for (let l = str.length + start; l < str.length + end; l++) {
            (newStr += str[l]);
        }
    return newStr;
  }
} else if (str instanceof Array) {
    let newArr = [];
    if ((start >= 0) && (end >= 0)) {
        for (let i = start; i < end; i++) {
            newArr.push(str[i]);
        }
    return newArr;
  } else if ((start < 0) && (end >= 0)) {
        for (let j = end + start; j < end; j++) {
            newArr.push(str[j]);
        }
    return newArr;
  } else if ((start >= 0) && (end < 0)) {
        for (let k = start; k < str.length + end; k++) {
            newArr.push(str[k]);
        }
    return newArr;
  } else if ((start < 0) && (end < 0)) {
        for (let l = str.length + start; l < str.length + end; l++) {
            newArr.push(str[l]);
        }
    return newArr;
  }
}
};

console.log(slice('abcdef', 1, 2));
console.log(slice('abcdef', -1, 2));
console.log(slice('abcdef', 1, -2));
console.log(slice('abcdef', -1, -2));
