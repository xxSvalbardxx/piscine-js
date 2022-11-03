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
function reduce(arr = [], func = (val, index, arr)){
    if (arr.length < 2){
        return Error("Array is not long enough");
    }

    let rslt = arr[0];
    for (let i = 0; i < arr.length- 1; i++) {
        rslt = func(rslt, arr[i]);
    }
    return rslt;
}
function reduceRight(arr = [], func = (val, index, arr)){
    if (arr.length < 2){
        return Error("Array is not long enough");
    }
    let rslt = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        rslt = func(rslt, arr[i]);
    }
    return rslt;    
}
