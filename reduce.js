function fold(arr = [], func = (val, index, arr), acc=0){
    let rslt = acc;
    for (let i = 0; i < arr.length; i++) {
        rslt = func(rslt, arr[i], i, arr); 
    }
    return rslt;
}
function foldRight(arr = [], func = (val, index, arr), acc=0){
    let rslt = acc;
    for (let i = arr.length - 1; i >= 0; i--) {
        rslt = func(rslt, arr[i], i, arr);
    }
    return rslt;
}
function reduce(arr = [], func = (val, index, arr), acc=0){
    let newArr = [];
    if (arr.length < 2){
        return Error("Array is not long enough");
    }
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(acc, arr[i], i, arr)); // func(accumulateur, element, index, array) => func(0, 1, 0, [1,2,3]) => func(1, 2, 1, [1,2,3]) => func(3, 3, 2, [1,2,3]) => func(6, undefined, 3, [1,2,3])
        acc = newArr[i];
    }
    return newArr[newArr.length - 1];
}
function reduceRight(arr = [], func = (val, index, arr), acc=0){
    let newArr = [];
    if (arr.length < 2){
        return Error("Array is not long enough");
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray(func(acc, arr[i], i, arr));
        acc = newArr[i];
        
    }
    return newArr[newArr.length - 1];
}
