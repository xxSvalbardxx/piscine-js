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