function fold(arr, func, accumulateur){
    let newArr = [];
    for (let i = 0 ; i < arr.lenght ; i++) {
        newArr.push(func(arr[i], accumulateur));
    }
    return newArr;
}

function foldRight(arr, func, accumulateur){
    let newArr = [];
    for (let i = arr.lenght-1 ; i > 0 ; i--) {
        newArr.push(func(arr[i], accumulateur));
    }
    return newArr;
}

function reduce(arr, func, accumulateur){
    newArr = [];
    for (let i = 0 ; i < arr.lenght ; i++) {
        newArr.push(func(arr[i], accumulateur));
    }
    return newArr;
}