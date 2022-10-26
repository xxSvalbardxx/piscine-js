const slice = (str, start = 0, end = str.length) => {

    let newStr = "";

    if (start >= 0) {
        for (let i = start; i < end; i++) {
            (newStr += str[i]);
        }
    return newStr;
  } else if (start < 0) {
        for (let j = end + start; j < end; j++) {
            (newStr += str[j]);
        }
    return newStr;
  }
};

console.log(slice('abcdef', 0, 2));
console.log(slice('abcdef', -2));
