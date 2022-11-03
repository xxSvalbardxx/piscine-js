function fold(arr = [], func = (val, index, arr), acc=0){
    rslt = acc;
    for (let i = 0; i < arr.length; i++) {
        rslt = func(rslt, arr[i], i, arr);
    }
    return rslt;
}