const slice = (str, start = 0, end = str.length) => {

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

};

console.log(slice('abcdef', 1, 2));
console.log(slice('abcdef', -1, 2));
console.log(slice('abcdef', 1, -2));
console.log(slice('abcdef', -1, -2));
