const slice = (arr, start = 0, end = str.length) => {
  let newArr = "";
  if (start >= 0) {
    
    for (let i = start; i < end; i++) {
        (newArr += arr[i]);
    }
    return newArr;
  } else if (start < 0) {
    for (let i = end + start; i < end; i++) {
        (newArr += arr[i]);
    }
    return newArr;
  }
};
console.log(slice('abcdef', 0, 2));
