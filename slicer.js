const slice = (arr, limit = 0) => {
  let newArr = "";
  if (limit >= 0) {
    
    for (let i = limit; i < arr.length; i++) {
        (newArr += arr[i]);
    }
    return newArr;
  } else if (limit < 0) {
    for (let i = arr.length + limit; i < arr.length; i++) {
        (newArr += arr[i]);
    }
    return newArr;
  }
};
