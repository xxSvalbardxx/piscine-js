const slice = (arr, start = 0) => {
    let newArr = [];
    for (let i = start; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}